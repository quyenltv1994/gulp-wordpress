<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       http://agilelogix.com
 * @since      1.0.0
 *
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/includes
 * @author     Your Name <email@agilelogix.com>
 */
class AgileStoreLocator {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      AgileStoreLocator_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $AgileStoreLocator    The string used to uniquely identify this plugin.
	 */
	protected $AgileStoreLocator;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->AgileStoreLocator = 'agile-store-locator';
		$this->version = '1.0.0';

		$this->load_dependencies();
		$this->set_locale();
		
		$this->plugin_admin = new AgileStoreLocator_Admin( $this->get_AgileStoreLocator(), $this->get_version() );
		
		//FRONTEND HOOOKS
		$this->plugin_public = new AgileStoreLocator_Public( $this->get_AgileStoreLocator(), $this->get_version() );
		add_action('wp_ajax_asl_load_stores', array($this->plugin_public, 'load_stores'));	
		add_action('wp_ajax_nopriv_asl_load_stores', array($this->plugin_public, 'load_stores'));

		add_action('wp_ajax_asl_search_log', array($this->plugin_public, 'search_log'));	
		add_action('wp_ajax_nopriv_asl_search_log', array($this->plugin_public, 'search_log'));	


		if (is_admin())
			$this->define_admin_hooks();
		else
			$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - AgileStoreLocator_Loader. Orchestrates the hooks of the plugin.
	 * - AgileStoreLocator_i18n. Defines internationalization functionality.
	 * - AgileStoreLocator_Admin. Defines all hooks for the admin area.
	 * - AgileStoreLocator_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once ASL_PLUGIN_PATH . 'includes/class-agile-store-locator-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once ASL_PLUGIN_PATH . 'includes/class-agile-store-locator-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once ASL_PLUGIN_PATH . 'admin/class-agile-store-locator-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once ASL_PLUGIN_PATH . 'public/class-agile-store-locator-public.php';

		$this->loader = new AgileStoreLocator_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the AgileStoreLocator_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new AgileStoreLocator_i18n();
		$plugin_i18n->set_domain( $this->get_AgileStoreLocator() );

		//$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

		add_action( 'plugins_loaded', array($this, 'load_plugin_textdomain') );
		//$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	public function load_plugin_textdomain() {


		$domain = 'asl_locator';

		$mo_file = WP_LANG_DIR . '/' . $domain . '/' . $domain . '-' . get_locale() . '.mo';

		//$mo_file = ASL_PLUGIN_PATH. $domain . '-' . get_locale() . '.mo';
	 	//dd(ASL_PLUGIN_PATH . 'languages/');

		
		load_textdomain( $domain, $mo_file ); 
		load_plugin_textdomain( $domain, false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
		//dd('i m plugin');
		//dd(__('Use my location to find the closest Service Provider near me', $domain));
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

	
		//ad menu if u r an admin
		add_action('admin_menu', array($this,'add_admin_menu'));
		add_action('wp_ajax_asl_upload_logo', array($this->plugin_admin, 'upload_logo'));	
		add_action('wp_ajax_asl_upload_marker', array($this->plugin_admin, 'upload_marker'));	
		/*For Stores*/
		add_action('wp_ajax_asl_add_store', array($this->plugin_admin, 'add_new_store'));	
		add_action('wp_ajax_asl_delete_all_stores', array($this->plugin_admin, 'admin_delete_all_stores'));	
		add_action('wp_ajax_asl_edit_store', array($this->plugin_admin, 'update_store'));	
		add_action('wp_ajax_asl_get_store_list', array($this->plugin_admin, 'get_store_list'));	
		add_action('wp_ajax_asl_delete_store', array($this->plugin_admin, 'delete_store'));	
		add_action('wp_ajax_asl_duplicate_store', array($this->plugin_admin, 'duplicate_store'));	
		/*Categories*/
		add_action('wp_ajax_asl_add_categories', array($this->plugin_admin, 'add_category'));
		add_action('wp_ajax_asl_delete_category', array($this->plugin_admin, 'delete_category'));
		add_action('wp_ajax_asl_update_category', array($this->plugin_admin, 'update_category'));
		add_action('wp_ajax_asl_get_category_byid', array($this->plugin_admin, 'get_category_by_id'));
		add_action('wp_ajax_asl_get_categories', array($this->plugin_admin, 'get_categories'));	

		/*Markers*/
		add_action('wp_ajax_asl_add_markers', array($this->plugin_admin, 'add_marker'));
		add_action('wp_ajax_asl_delete_marker', array($this->plugin_admin, 'delete_marker'));
		add_action('wp_ajax_asl_update_marker', array($this->plugin_admin, 'update_marker'));
		add_action('wp_ajax_asl_get_marker_byid', array($this->plugin_admin, 'get_marker_by_id'));
		add_action('wp_ajax_asl_get_markers', array($this->plugin_admin, 'get_markers'));	

		/*Import and settings*/
		add_action('wp_ajax_asl_import_store', array($this->plugin_admin, 'import_store'));	
		add_action('wp_ajax_asl_delete_import_file', array($this->plugin_admin, 'delete_import_file'));	
		add_action('wp_ajax_asl_upload_store_import_file', array($this->plugin_admin, 'upload_store_import_file'));
		add_action('wp_ajax_asl_export_file', array($this->plugin_admin, 'export_store'));
		add_action('wp_ajax_asl_save_setting', array($this->plugin_admin, 'save_setting'));
		add_action('wp_ajax_asl_save_custom_map', array($this->plugin_admin, 'save_custom_map'));		

		/*Infobox & Map*/
		//add_action('wp_ajax_asl_save_infobox', array($this->plugin_admin, 'save_infobox'));
		add_action('wp_ajax_asl_get_stats', array($this->plugin_admin, 'get_stat_by_month'));



		$this->loader->add_action( 'admin_enqueue_scripts', $this->plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $this->plugin_admin, 'enqueue_scripts' );

	}

	/*All Admin Callbacks*/
	public function add_admin_menu() {

		//activate_plugins
		if (current_user_can('delete_posts')){
			$svg = 'dashicons-location';
			add_Menu_page('Agile Store Locator', 'AS Locator', 'delete_posts', 'asl-plugin', array($this->plugin_admin,'admin_plugin_settings'),$svg);
			add_submenu_page( 'asl-plugin', 'Dashboard', 'Dashboard', 'delete_posts', 'agile-dashboard', array($this->plugin_admin,'admin_dashboard'));
			add_submenu_page( 'asl-plugin', 'Create New Store', 'Add New Store', 'delete_posts', 'create-agile-store', array($this->plugin_admin,'admin_add_new_store'));
			add_submenu_page( 'asl-plugin', 'Manage Stores', 'Manage Markers', 'delete_posts', 'manage-store-markers', array($this->plugin_admin,'admin_store_markers'));
			add_submenu_page( 'asl-plugin', 'Manage Stores', 'Manage Stores', 'delete_posts', 'manage-agile-store', array($this->plugin_admin,'admin_manage_store'));
			add_submenu_page( 'asl-plugin', 'Manage Stores', 'Manage Categories', 'delete_posts', 'manage-asl-categories', array($this->plugin_admin,'admin_manage_categories'));
			add_submenu_page( 'asl-plugin', 'Import/Export Stores', 'Import/Export Stores', 'delete_posts', 'import-store-list', array($this->plugin_admin,'admin_import_stores'));
			//add_submenu_page( 'asl-plugin', 'InfoBox Maker', 'InfoBox Maker', 'delete_posts', 'infobox-maker', array($this->plugin_admin,'admin_info_box'));
			add_submenu_page( 'asl-plugin', 'Customize Map', 'Customize Map', 'delete_posts', 'customize-map', array($this->plugin_admin,'admin_customize_map'));
			add_submenu_page( 'asl-plugin', 'ASL Settings', 'ASL Settings', 'delete_posts', 'user-settings', array($this->plugin_admin,'admin_user_settings'));
			
			add_submenu_page('asl-plugin-edit', 'Edit Store', 'Edit Store', 'delete_posts', 'edit-agile-store', array($this->plugin_admin,'edit_store'));
			remove_submenu_page( "asl-plugin", "asl-plugin" );
			remove_submenu_page( "asl-plugin", "asl-plugin-edit" );
			//edit-agile-store
        }
	}

	/*Frontend of Plugin*/
	public function frontendStoreLocatore($atts)
	{
		
		//[myshortcode foo="bar" bar="bing"]
	    //ASL_PLUGIN_PATH.
		
		global $wpdb;


		$query   = "SELECT * FROM ".ASL_PREFIX."configs";
		$configs = $wpdb->get_results($query);

		$all_configs = array();
		
		foreach($configs as $_config)
			$all_configs[$_config->key] = $_config->value;

		$all_configs['URL'] = ASL_URL_PATH;

		$all_configs = shortcode_atts( $all_configs, $atts );

		$category_clause = "";

		$atts['only_category'] = null;
		if(false && isset($atts['only_category'])) {

			$all_configs['category'] = $atts['only_category'];
			$category_clause = " AND id = ".$all_configs['category'];
		}

		//min and max zoom
		if(isset($atts['maxzoom'])) {
			
			$all_configs['maxZoom'] = $atts['maxzoom'];
		}

		if(isset($atts['minzoom'])) {
			
			$all_configs['minZoom'] = $atts['minzoom'];
		}
		

		//Get the categories
		$all_categories = array();
		$results = $wpdb->get_results("SELECT id,category_name as name,icon FROM ".ASL_PREFIX."categories WHERE is_active = 1".$category_clause);

		foreach($results as $_result)
		{
			$all_categories[$_result->id] = $_result;
		}


		//Get the Markers
		$all_markers = array();
		$results = $wpdb->get_results("SELECT id,marker_name as name,icon FROM ".ASL_PREFIX."markers WHERE is_active = 1");

		foreach($results as $_result) {
			
			$all_markers[$_result->id] = $_result;
		}

		

		

		///get the map configuration
		switch($all_configs['map_layout']) {

			//25-blue-water
			case '0':
				$all_configs['map_layout'] = '[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]';
				
			break;

			//Flat Map
			case '1':
				//$all_configs['map_layout'] = '[{featureType:"landscape",elementType:"all",stylers:[{visibility:"on"},{color:"#f3f4f4"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{weight:.9},{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#83cead"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#7fc8ed"}]}]';
				$all_configs['map_layout'] = '[{featureType:"landscape",elementType:"all",stylers:[{visibility:"on"},{color:"#f3f4f4"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{weight:.9},{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#83cead"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#7fc8ed"}]}]';
			break;

			//Icy Blue
			case '2':
				$all_configs['map_layout'] = '[{stylers:[{hue:"#2c3e50"},{saturation:250}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:50},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}]';
			break;


			//Pale Dawn
			case '3':
				$all_configs['map_layout'] = '[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2e5d4"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}]';
			break;


			//cladme
			case '4':
				$all_configs['map_layout'] = '[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#4f595d"},{visibility:"on"}]}]';
			break;


			//light monochrome
			case '5':
				$all_configs['map_layout'] = '[{featureType:"administrative.locality",elementType:"all",stylers:[{hue:"#2c2e33"},{saturation:7},{lightness:19},{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#ffffff"},{saturation:-100},{lightness:100},{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{hue:"#ffffff"},{saturation:-100},{lightness:100},{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{hue:"#bbc0c4"},{saturation:-93},{lightness:31},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{hue:"#bbc0c4"},{saturation:-93},{lightness:31},{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{hue:"#bbc0c4"},{saturation:-93},{lightness:-2},{visibility:"simplified"}]},{featureType:"road.local",elementType:"geometry",stylers:[{hue:"#e9ebed"},{saturation:-90},{lightness:-8},{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:10},{lightness:69},{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:-78},{lightness:67},{visibility:"simplified"}]}]';
			break;
			

			//mostly grayscale
			case '6':
				$all_configs['map_layout'] = '[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"administrative",elementType:"labels",stylers:[{saturation:"-100"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{gamma:"0.75"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{lightness:"-37"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f9f9f9"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{saturation:"-100"},{lightness:"40"},{visibility:"off"}]},{featureType:"landscape.natural",elementType:"labels.text.fill",stylers:[{saturation:"-100"},{lightness:"-37"}]},{featureType:"landscape.natural",elementType:"labels.text.stroke",stylers:[{saturation:"-100"},{lightness:"100"},{weight:"2"}]},{featureType:"landscape.natural",elementType:"labels.icon",stylers:[{saturation:"-100"}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:"-100"},{lightness:"80"}]},{featureType:"poi",elementType:"labels",stylers:[{saturation:"-100"},{lightness:"0"}]},{featureType:"poi.attraction",elementType:"geometry",stylers:[{lightness:"-4"},{saturation:"-100"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"},{visibility:"on"},{saturation:"-95"},{lightness:"62"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road",elementType:"labels",stylers:[{saturation:"-100"},{gamma:"1.00"}]},{featureType:"road",elementType:"labels.text",stylers:[{gamma:"0.50"}]},{featureType:"road",elementType:"labels.icon",stylers:[{saturation:"-100"},{gamma:"0.50"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"},{saturation:"-100"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{lightness:"-13"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{lightness:"0"},{gamma:"1.09"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"},{saturation:"-100"},{lightness:"47"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{lightness:"-12"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{saturation:"-100"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"},{lightness:"77"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{lightness:"-5"},{saturation:"-100"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{saturation:"-100"},{lightness:"-15"}]},{featureType:"transit.station.airport",elementType:"geometry",stylers:[{lightness:"47"},{saturation:"-100"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]},{featureType:"water",elementType:"geometry",stylers:[{saturation:"53"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-42"},{saturation:"17"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:"61"}]}]';
			break;


			//turquoise water
			case '7':
				$all_configs['map_layout'] = '[{stylers:[{hue:"#16a085"},{saturation:0}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}]';
			break;


			//unsaturated browns
			case '8':
				$all_configs['map_layout'] = '[{elementType:"geometry",stylers:[{hue:"#ff4400"},{saturation:-68},{lightness:-4},{gamma:.72}]},{featureType:"road",elementType:"labels.icon"},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{hue:"#0077ff"},{gamma:3.1}]},{featureType:"water",stylers:[{hue:"#00ccff"},{gamma:.44},{saturation:-33}]},{featureType:"poi.park",stylers:[{hue:"#44ff00"},{saturation:-23}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{hue:"#007fff"},{gamma:.77},{saturation:65},{lightness:99}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{gamma:.11},{weight:5.6},{saturation:99},{hue:"#0091ff"},{lightness:-86}]},{featureType:"transit.line",elementType:"geometry",stylers:[{lightness:-48},{hue:"#ff5e00"},{gamma:1.2},{saturation:-23}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{saturation:-64},{hue:"#ff9100"},{lightness:16},{gamma:.47},{weight:2.7}]}]';
			break;

			//turquoise water
			default:
				$all_configs['map_layout'] = '[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]';
				//$all_configs['map_layout'] = '[{featureType:"landscape",elementType:"all",stylers:[{visibility:"on"},{color:"#f3f4f4"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{weight:.9},{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#83cead"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"},{color:"#fee379"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#7fc8ed"}]}]';
			break;
		}

		//Load the map customization
		$map_customize  = $wpdb->get_results("SELECT content FROM ".ASL_PREFIX."settings WHERE type = 'map' AND id = 1");
		$map_customize  = ($map_customize && $map_customize[0]->content)?$map_customize[0]->content:'[]';
			
		//For Translation	
		$words = array(
			'direction' => __('Directions','asl_locator'),
			'zoom' => __('Zoom Here','asl_locator'),
			'detail' => __('Details','asl_locator'),
			'select_option' => __('Select Option','asl_locator'),
			'none' => __('None','asl_locator')
		);

		$all_configs['words'] = $words;
		
		ob_start();
		
		switch($all_configs['template'])
		{
			case '2':
				if($all_configs['color_scheme_2'] < 0 && $all_configs['color_scheme_2'] > 9)
					$all_configs['color_scheme_2'] = 0;

				//get the tool tip

		    	include 'template-frontend-2.php';
		    	break;

			case '1':
				if($all_configs['color_scheme_1'] < 0 && $all_configs['color_scheme_1'] > 9)
					$all_configs['color_scheme_1'] = 0;

				//get the tool tip
				

		    	include 'template-frontend-1.php';
		    	break;

			default:
				if($all_configs['color_scheme'] < 0 && $all_configs['color_scheme'] > 9)
					$all_configs['color_scheme'] = 0;


		    	include 'template-frontend-0.php';
		    	break;   	
		}

		$output = ob_get_contents();
		ob_end_clean();
		return $output;
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$this->loader->add_action( 'wp_enqueue_scripts', $this->plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $this->plugin_public, 'enqueue_scripts' );
		

        add_shortcode( 'ASL_STORELOCATOR',array($this,'frontendStoreLocatore'));	
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_AgileStoreLocator() {
		return $this->AgileStoreLocator;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    AgileStoreLocator_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
