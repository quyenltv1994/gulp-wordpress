<?php

$all_configs['infobox_layout'] = '0';

?>
<link rel='stylesheet' id='asl-plugin-css'  href='<?php echo ASL_URL_PATH ?>public/css/blue/test2c<?php echo $all_configs['color_scheme_1'] ?>.css' type='text/css' media='all' />
<link rel='stylesheet' id='asl-responsive-css'  href='<?php echo ASL_URL_PATH ?>public/css/asl_responsive.css' type='text/css' media='all' />
<style type="text/css">
#asl-storelocator.asl-p-cont .Status_filter .onoffswitch-inner::before{content: "<?php echo __('OPEN', 'asl_locator') ?>" !important}
#asl-storelocator.asl-p-cont .Status_filter .onoffswitch-inner::after{content: "<?php echo __('CLOSE', 'asl_locator') ?>" !important}
</style>
<script type="text/javascript">
	var asl_configuration = <?php echo json_encode($all_configs); ?>,
    asl_categories      = <?php echo json_encode($all_categories); ?>,
		asl_markers	        = <?php echo json_encode($all_markers); ?>,
    _asl_map_customize  = <?php echo $map_customize ?>;
</script>
<?php
$class = '';

if($all_configs['display_list'] == '0')
  $class = ' map-full';

if($all_configs['full_width'])
  $class .= ' full-width';

?>

<div id="asl-storelocator" class="container no-pad template2 storelocator-main asl-p-cont asl-layout-<?php echo $all_configs['layout'] ?> asl-bg-0 asl-text-<?php echo $all_configs['font_color_scheme'].$class ?>">

<?php if($all_configs['advance_filter']): ?>    
<div class="row Filter_section">
    <div class="col-xs-12 col-sm-4 search_filter">
        <p><?php echo __( 'Search Location', 'asl_locator') ?></p>
        <p>
          <input type="text" id="auto-complete-search" class="form-control" placeholder="">
          <span><i class="glyphicon glyphicon-screenshot" title="Current Location"></i></span>
        </p>
    </div>
    <div class="col-xs-12 col-sm-8">
        <div class="">
            <div class="col-xs-12">
                <div class="asl-advance-filters hide">
                  <div class="col-sm-9 col-md-8">
                      <div class="row">
                          <div class="col-sm-5 col-xs-5 drop_box_filter">
                              <p><span><?php echo $all_configs['category_title']  ?></span></p>
                              <div class="categories_filter">
                              </div>
                          </div>
                          <div class="col-sm-7 col-xs-7 range_filter hide">
                              <p class="rangeFilter">
                                <span><?php echo __( 'Distance Range','asl_locator') ?></span>
                                <input id="asl-radius-slide" type="text" class="span2" />
                                <span><?php echo __( 'Radius','asl_locator') ?>: <span id="asl-radius-input"></span> <span id="asl-dist-unit"><?php echo __( 'KM','asl_locator') ?></span></span>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-3 col-xs-4 col-md-3 col-md-push-1 col-sm-push-0 Status_filter">
                      <div class="">
                          <p>
                            <span><?php echo __('Status', 'asl_locator') ?></span>
                          </p>
                          <div class="onoffswitch">
                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="asl-open-close" checked="checked">
                            <label class="onoffswitch-label" for="asl-open-close">
                                <span class="onoffswitch-inner"></span>
                                <span class="onoffswitch-switch"></span>
                            </label>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>
<div class="row hide">
    <div class="col-md-12" id="filter-options">
        <div class="inner-filter"></div>
    </div>
</div>
<div class="row">
	<div class="col-sm-8 col-xs-12 asl-map">
    <div class="store-locator">
      <div id="map-canvas"></div>
      <!-- agile-modal -->
      <div id="agile-modal-direction" class="agile-modal fade">
        <div class="agile-modal-backdrop-in"></div>
        <div class="agile-modal-dialog in">
          <div class="agile-modal-content">
            <div class="agile-modal-header">
              <button type="button" class="close-directions close" data-dismiss="agile-modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4><?php echo __('Get Your Directions', 'asl_locator') ?></h4>
            </div>
            <div class="form-group">
              <label for="frm-lbl"><?php echo __('From', 'asl_locator') ?>:</label>
              <input type="text" class="form-control frm-place" id="frm-lbl" placeholder="<?php echo __('Enter a Location', 'asl_locator') ?>">
            </div>
            <div class="form-group">
              <label for="frm-lbl"><?php echo __('To', 'asl_locator') ?>:</label>
              <input readonly="true" type="text"  class="directions-to form-control" id="to-lbl" placeholder="<?php echo __('Prepopulated Destination Address', 'asl_locator') ?>">
            </div>
            <div class="form-group">
              <span for="frm-lbl"><?php echo __('Show Distance In', 'asl_locator') ?></span>
              <label class="checkbox-inline">
                <input type="radio" name="dist-type" id="rbtn-km" value="0"> <?php echo __('KM', 'asl_locator') ?>
              </label>
              <label class="checkbox-inline">
                <input type="radio" name="dist-type" checked id="rbtn-mile" value="1"> <?php echo __('Mile', 'asl_locator') ?>
              </label>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-default btn-submit"><?php echo __('GET DIRECTIONS', 'asl_locator') ?></button>
            </div>
          </div>
        </div>
      </div>

      <div id="asl-geolocation-agile-modal" class="agile-modal fade">
        <div class="agile-modal-backdrop-in"></div>
        <div class="agile-modal-dialog in">
          <div class="agile-modal-content">
          	<button type="button" class="close-directions close" data-dismiss="agile-modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <?php if($all_configs['prompt_location'] == '2'): ?>
              <div class="form-group">
                <h4><?php echo __('LOCATE YOUR GEOPOSITION', 'asl_locator') ?></h4>
              </div>
              <div class="form-group">
                <div class="col-md-9">
                  <input type="text" class="form-control" id="asl-current-loc" placeholder="Your Address">
                </div>
                <div class="col-md-3">
                  <button type="button" id="asl-btn-locate" class="btn btn-default"><?php echo __('LOCATE', 'asl_locator') ?></button>
                </div>
              </div>
              <?php else: ?>
              <div class="form-group">
                <h4><?php echo __('Use my location to find the closest Service Provider near me', 'asl_locator') ?></h4>
              </div>
              <div class="form-group">
                <button type="button" id="asl-btn-geolocation" class="btn btn-default"><?php echo __('USE LOCATION', 'asl_locator') ?></button>
              </div>
              <?php endif; ?>
          </div>
        </div>
      </div>
      <!-- agile-modal end -->
    </div>
	</div>
	<div class="col-sm-4 col-xs-12 asl-panel">
    <?php if(!$all_configs['advance_filter']): ?>    
    <div class="col-xs-12 inside search_filter">
      <div class="asl-store-search">
          <input type="text" id="auto-complete-search" class="form-control" placeholder="">
          <span><i class="glyphicon glyphicon-screenshot" title="<?php echo __('Current Location', 'asl_locator') ?>"></i></span>
      </div>
    </div>
    <?php else: ?>
    
    <?php endif; ?>
    <!--  Panel Listing -->
    <div id="panel" class="storelocator-panel">
    	<div class="asl-overlay" id="map-loading">
        <div class="white"></div>
        <div class="loading"><img style="margin-right: 10px;" class="loader" src="<?php echo ASL_URL_PATH ?>public/Logo/loading.gif"><?php echo __('Loading...', 'asl_locator') ?></div>
      </div>
      <div class="panel-cont">
          <div class="panel-inner">
            <div class="col-md-12">
                  <ul id="p-statelist" class="accordion" role="tablist" aria-multiselectable="true">
                </ul>
            </div>
          </div>
      </div>
      <div class="directions-cont hide">
        <div class="agile-modal-header">
          <button type="button" class="close"><span aria-hidden="true">&times;</span></button>
          <h4><?php echo __('Directions', 'asl_locator') ?></h4>
        </div>
        <div class="rendered-directions"></div>
      </div>
    </div>
	</div> 
</div>
<!-- This plugin is developed by "Agile Store Locator" http://agilestorelocator.com-->
</div>

<script id="tmpl_list_item" type="text/x-jsrender">
	<div class="item" data-id="{{:id}}">
  	<div class="col-md-9 col-xs-9 addr-sec">
    	<p class="p-title">{{:title}}</p>
    	<p class="p-area"><span class="glyphicon glyphicon-map-marker"></span>{{:address}}</p>
    	{{if phone}}
      <p class="p-area"><span class="glyphicon glyphicon-earphone"></span> <?php echo __( 'Phone','asl_locator') ?>: {{:phone}}</p>
      {{/if}}
      {{if c_names}}
      <p class="p-category"><span class="glyphicon glyphicon-tags"></span> {{:c_names}}</p>
      {{/if}}
      {{if end_time && start_time}}
      <p class="p-time"><span class="glyphicon glyphicon-time"></span> {{:start_time}} - {{:end_time}}</p>
      {{/if}}
      {{if days_str}}
      <p class="p-time"><span class="glyphicon glyphicon-calendar"></span>{{:days_str}}</p>
      {{/if}}
  	</div>
    <div class="col-md-3 col-xs-3">
    	<div class="col-xs-5 col-md-12 item-thumb">
        	<a class="thumb-a">
            {{if path}}
              <img src="<?php echo ASL_URL_PATH ?>public/Logo/{{:path}}" alt="logo">
            {{/if}}
        	</a>
      </div>
  	</div>
    <div class="col-xs-12 distance">
        <div class="col-xs-6">
          <p class="p-direction"><span class="s-direction"><?php echo __( 'Directions','asl_locator') ?></span></p>
        </div>
        {{if distance}}
        <div class="col-xs-6">
            <span class="s-distance"><?php echo __( 'Distance','asl_locator') ?>: {{:dist_str}}</span>
        </div>
        {{/if}}
    </div>
    {{if description_2}}
    <div class="col-xs-12">
      <button type="button" onclick="javascript:asl_jQuery(this).next().next().slideToggle(100);asl_jQuery(this).next().show();asl_jQuery(this).hide()" class="asl_Readmore_button"><?php echo __( 'Read more','asl_locator') ?></button>
      <button type="button" onclick="javascript:asl_jQuery(this).next().slideToggle(100);asl_jQuery(this).prev().show();asl_jQuery(this).hide()" style="display:none" class="asl_Readmore_button"><?php echo __( 'Hide Details','asl_locator') ?></button>
    <p class="more_info" style="display:none">{{:description_2}}</p>
    </div>
    {{/if}}
  	<div class="clear"/>
  </div>
</script>

<script id="asl_too_tip" type="text/x-jsrender">
<div class="image_map_popup" style="display:none"><img src="{{:URL}}public/Logo/{{:path}}" /></div>
  <h3>{{:title}}</h3>
  <div class="infowindowContent">
    <div class="info-addr">
      <div class="address"><span class="glyphicon glyphicon-map-marker"></span>{{:address}}</div>
      {{if phone}}
      <div class="phone"><span class="glyphicon glyphicon-earphone"></span><b><?php echo __( 'Phone','asl_locator') ?>: </b><a href="tel:{{:phone}}">{{:phone}}</a></div>
      {{/if}}
      {{if end_time && start_time}}
      <div class="phone"><span class="glyphicon glyphicon-time"></span> {{:start_time}} - {{:end_time}}</div>
      {{/if}}
      {{if days_str}}
      <div class="p-time"><span class="glyphicon glyphicon-calendar"></span> {{:days_str}}</div>
      {{/if}}
      {{if show_categories && c_names}}
      <div class="categories"><span class="glyphicon glyphicon-tags"></span>{{:c_names}}</div>
      {{/if}}
      {{if distance}}
      <div class="distance"><?php echo __('Distance', 'asl_locator') ?>: {{:dist_str}}</div>
      {{/if}}
    </div>
    <div class="img_box" style="display:none">
    <img src="{{:URL}}public/Logo/{{:path}}" alt="logo">
  </div>
  <div class="asl-buttons"></div>
</div><div class="arrow-down"></div>
</script>

