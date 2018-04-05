<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://agilelogix.com
 * @since      1.0.0
 *
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/public
 * @author     Your Name <email@agilelogix.com>
 */
class AgileStoreLocator_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $AgileStoreLocator    The ID of this plugin.
	 */
	private $AgileStoreLocator;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $AgileStoreLocator       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $AgileStoreLocator, $version ) {

		$this->AgileStoreLocator = $AgileStoreLocator;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in AgileStoreLocator_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The AgileStoreLocator_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->AgileStoreLocator.'-all-css',  ASL_URL_PATH.'public/css/all-css.min.css', array(), $this->version, 'all' );
		//wp_enqueue_style( $this->AgileStoreLocator.'-asl-responsive',  ASL_URL_PATH.'public/css/asl_responsive.css', array(), $this->version, 'all' );
		//wp_enqueue_style( $this->AgileStoreLocator.'-asl-responsive',  ASL_URL_PATH.'public/css/asl-blue.css', array(), $this->version, 'all' );
		//wp_enqueue_style( $this->AgileStoreLocator.'-asl-responsive',  ASL_URL_PATH.'public/css/blue/test2c10.css', array(), $this->version, 'all' );
		//wp_enqueue_style( $this->AgileStoreLocator,  ASL_URL_PATH.'public/css/agile-store-locator-public.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in AgileStoreLocator_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The AgileStoreLocator_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		$title_nonce = wp_create_nonce( 'asl_remote_nonce' );
		
		
		global $wp_scripts,$wpdb;

		$sql = "SELECT `key`,`value` FROM ".ASL_PREFIX."configs WHERE `key` = 'api_key'";
		$all_result = $wpdb->get_results($sql);
		

		//$map_url = '//maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry,places';
		$map_url = '//maps.googleapis.com/maps/api/js?libraries=places,drawing';

		if($all_result[0] && $all_result[0]->value) {
			$api_key = $all_result[0]->value;

			$map_url .= '&key='.$api_key;
		}

		//dd(get_locale());

		//add_filter('script_loader_tag', array($this,'add_async_attribute'), 10, 2);

		//dd($wp_scripts->registered);
		wp_enqueue_script('google-map', $map_url );
		wp_enqueue_script( $this->AgileStoreLocator.'-lib', ASL_URL_PATH . 'public/js/libs_new.min.js', array('jquery'), $this->version, false );
		

		wp_enqueue_script( $this->AgileStoreLocator.'-script', ASL_URL_PATH . 'public/js/site_script.js', array('jquery'), $this->version, false );
		wp_localize_script( $this->AgileStoreLocator.'-script', 'ASL_REMOTE', array(
		    'ajax_url' => admin_url( 'admin-ajax.php' ),
		    'nonce'    => $title_nonce, // It is common practice to comma after
		) );

		
	}

	function add_async_attribute($tag, $handle) {
	 	
	    if ($handle == 'jquery-core' || $handle == 'jquery-migrate' || $handle == 'agile-store-locator-lib' || $handle == 'agile-store-locator-script'  || $handle == 'google-map' )
        	return str_replace( ' src', ' data-cfasync="false" src', $tag );	
    	else
    		return $tag;
    	

	}

	public function search_log() {

		global $wpdb;
		
		$nonce = isset($_GET['nonce'])?$_GET['nonce']:null;
		/*
		if ( ! wp_verify_nonce( $nonce, 'asl_remote_nonce' ))
 			die ( 'CRF check error.');
 		*/

 		if(!isset($_POST['is_search'])) {
 			die ( 'CRF check error.');
 		}

		$is_search 	  = ($_POST['is_search'] == '1')?1:0;
		$ip_address   = $_SERVER['REMOTE_ADDR'];


		$ASL_PREFIX = ASL_PREFIX;

		if($is_search == 1) {
			
			$search_str   = $_POST['search_str'];
			$place_id     = $_POST['place_id'];

			//To avoid multiple creations
			$count = $wpdb->get_results( $wpdb->prepare( "SELECT COUNT(*) AS c FROM `{$ASL_PREFIX}stores_view` WHERE (created_on > NOW() - INTERVAL 15 MINUTE) AND place_id = %s",
				$place_id
			));

			if($count[0]->c < 1) {

				$wpdb->query( $wpdb->prepare( "INSERT INTO {$ASL_PREFIX}stores_view (search_str, place_id, is_search, ip_address ) VALUES ( %s, %s, %d, %s )", 
			    	$search_str, $place_id, $is_search ,$ip_address 
				));
			}
		}
		else {

			$store_id   = $_POST['store_id'];

			//To avoid multiple creations
			$count = $wpdb->get_results( $wpdb->prepare( "SELECT COUNT(*) AS c FROM `{$ASL_PREFIX}stores_view` WHERE (created_on > NOW() - INTERVAL 15 MINUTE) AND store_id = %s",
				$store_id
			));

			if($count[0]->c < 1) {
				
				$wpdb->query( $wpdb->prepare( "INSERT INTO {$ASL_PREFIX}stores_view (store_id, is_search, ip_address ) VALUES ( %s, %d, %s )", 
			    	$store_id, $is_search ,$ip_address
				));
			}

		}

	
		echo die('[]');
	}

	public function load_stores()
	{
		//header('Content-Type: application/json');
		global $wpdb;
		
		$nonce = isset($_GET['nonce'])?$_GET['nonce']:null;
		/*
		if ( ! wp_verify_nonce( $nonce, 'asl_remote_nonce' ))
 			die ( 'CRF check error.');
 		*/


		$load_all 	 = ($_GET['load_all'] == '1')?true:false;
		$accordion   = ($_GET['layout'] == '1')?true:false;
		$category    = ($_GET['category'])?$_GET['category']:null;


		$ASL_PREFIX = ASL_PREFIX;

		$bound   = '';

		$extra_sql = '';
		$country_field = '';

		

		//Load on bound :: no Load all
		if(!$load_all) {
			
			$nw     =  $_GET['nw'];
	        $se     =  $_GET['se'];

	        $a      = floatval($nw[0]);
	        $b      = floatval($nw[1]);

	        $c      = floatval($se[0]);
	        $d      = floatval($se[1]);
	    

			$bound   = "AND (($a < $c AND s.lat BETWEEN $a AND $c) OR ($c < $a AND s.lat BETWEEN $c AND $a))
                    	AND (($b < $d AND s.lng BETWEEN $b AND $d) OR ($d < $b AND s.lng BETWEEN $d AND $b))";
       	}
       	else if($accordion) {

       		$country_field = " {$ASL_PREFIX}countries.`country`,";
       		$extra_sql = "LEFT JOIN {$ASL_PREFIX}countries ON s.`country` = {$ASL_PREFIX}countries.id";
       	}


       	$clause = '';
       	if($category) {

       		$clause = " AND {$ASL_PREFIX}stores_categories.`category_id` = ".intval($category);
       	}

		$query   = "SELECT s.`id`, `title`,  `description`, `street`,  `city`,  `state`, `postal_code`, {$country_field} `lat`,`lng`,`phone`,  `fax`,`email`,`website`,`logo_id`,{$ASL_PREFIX}storelogos.`path`,`start_time`,`end_time`,`marker_id`,`description_2`, `days`, time_per_day,{$ASL_PREFIX}stores_timing.*,
					group_concat(category_id) as categories FROM {$ASL_PREFIX}stores as s 
					LEFT JOIN {$ASL_PREFIX}stores_timing ON s.id = {$ASL_PREFIX}stores_timing.store_id
					LEFT JOIN {$ASL_PREFIX}storelogos ON logo_id = {$ASL_PREFIX}storelogos.id
					LEFT JOIN {$ASL_PREFIX}stores_categories ON s.`id` = {$ASL_PREFIX}stores_categories.store_id
					$extra_sql
					WHERE (is_disabled is NULL || is_disabled = 0) {$bound} {$clause}
					GROUP BY s.`id` ORDER BY `title`";

		$query .= "LIMIT 1000";

		
		
		$all_results = $wpdb->get_results($query);

		//die($wpdb->last_error);
		$days_in_words = array('0'=>__( 'Sun','asl_locator'), '1'=>__('Mon','asl_locator'), '2'=>__( 'Tues','asl_locator'), '3'=>__( 'Wed','asl_locator' ), '4'=> __( 'Thur','asl_locator'), '5'=>__( 'Fri','asl_locator' ), '6'=> __( 'Sat','asl_locator')) ;
		
		foreach($all_results as $aRow) {

	    	if($aRow->days) {
	    		$days 	  = explode(',',$aRow->days);
	    		$days_are = array();
	    		
	    		foreach($days as $d) {

	    			$days_are[] = $days_in_words[$d];
	    		}

	    		$aRow->days_str = implode(', ', $days_are);
	    	}
	    }

		echo json_encode($all_results);die;
	}

}
