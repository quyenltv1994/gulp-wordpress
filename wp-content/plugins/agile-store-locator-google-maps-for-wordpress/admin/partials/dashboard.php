<!-- Container -->
<div class="container asl-p-cont asl-new-bg">
  <div class="row asl-inner-cont">
  <div class="col-md-12">
    <h3  class="alert alert-info head-1">Agile Store Locator Dashboard</h3>
    <div class="alert alert-info" role="alert">
      Please visit the documentation page to explore all options. <a target="_blank" href="https://agilestorelocator.com">Agile Store Locator</a> 
    </div>
    <?php if(!$all_configs['api_key']): ?>
        <h3  class="alert alert-danger" style="font-size: 14px">Google API KEY is missing, the Map Search and Direction will not work without it, Please add Google API KEY. <a href="https://agilestorelocator.com/blog/enable-google-maps-api-agile-store-locator-plugin/" target="_blank">How to Add API Key?</a></h3>
      <?php endif; ?>
    <div class="dashboard-area">
      <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3 stats-store">
                <div class="stats">
                    <div class="stats-a"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                    <div class="stats-b"><?php echo $all_stats['stores'] ?><br><span>Stores</span></div>
                </div>
              </div>
              <div class="col-md-3 stats-category">
                <div class="stats">
                    <div class="stats-a"><span class="glyphicon glyphicon-tag"></span></div>
                    <div class="stats-b"><?php echo $all_stats['categories'] ?><br><span>Categories</span></div>
                </div>
              </div>
              <div class="col-md-3 stats-marker">
                <div class="stats">
                    <div class="stats-a"><span class="glyphicon glyphicon-map-marker"></span></div>
                    <div class="stats-b"><?php echo $all_stats['markers'] ?><br><span>Markers</span></div>
                </div>
              </div>
              <div class="col-md-3 stats-searches">
                <div class="stats">
                    <div class="stats-a"><span class="glyphicon glyphicon-search"></span></div>
                    <div class="stats-b"><?php echo $all_stats['searches'] ?><br><span>Searches</span></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="row"></div>
      <ul class="nav nav-tabs" style="margin-top:30px">
        <li role="presentation" class="active"><a href="#asl-analytics">Analytics</a></li>
        <li role="presentation"><a href="#asl-views">Top Views</a></li>
      </ul>
      <div class="tab-content" id="asl-tabs">
        
        <div class="tab-pane fade in active" role="tabpanel" id="asl-analytics" aria-labelledby="asl-analytics">
          <div class="row">
            <div class="col-md-4 ralign col-md-offset-8" style="margin-top: 30px">
              <div class="form-group">
                <label class="col-sm-3 control-label" style="line-height:35px;width:30%" for="asl-search-month">Period</label>
                <select id="asl-search-month" class="form-control" style="width:70%">
                  <?php 
                  for ($i=0; $i<=12; $i++) { 
                    echo '<option value="'.date('m-Y', strtotime("-$i month")).'">'.date('m/Y', strtotime("-$i month")).'</option>';
                  }
                  ?>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="canvas-holder" style="width:100%">
                  <canvas id="asl_search_canvas" style="width:300px;height:400px"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" role="tabpanel" id="asl-views" aria-labelledby="asl-views">
          
          <div class="col-md-12"> 
            <ul class="list-group">
              <li class="list-group-item active"><span class="store-id">Store ID</span> Most Views Stores List<span class="views">Views</span></li>
              <?php foreach($top_stores as $s):?>
              <li class="list-group-item"><span class="store-id"><?php echo $s->store_id ?></span> <?php echo $s->title ?> <span class="views"><?php echo $s->views ?></span></li>
              <?php endforeach; ?>
            </ul>
          </div>
          <br clear="both">
          <div class="col-md-12"> 
            <ul class="list-group">
              <li class="list-group-item active"> Most Search Locations <span class="views">Views</span></li>
              <?php foreach($top_search as $s):?>
              <li class="list-group-item"> <?php echo $s->search_str ?> <span class="views"><?php echo $s->views ?></span></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>

      </div>  
    </div>

    <div class="dump-message asl-dumper"></div>
  </div>  
  </div>
</div>
<!-- asl-cont end-->








<!-- SCRIPTS -->
<script type="text/javascript">
var ASL_Instance = {
	url: '<?php echo ASL_URL_PATH ?>'
};

var ASL_upload = '<?php echo ASL_PLUGIN_PATH ?>';
asl_engine.pages.dashboard();
</script>