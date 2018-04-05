<!-- Container -->
<div class="container asl-p-cont asl-new-bg">
  <div class="row asl-inner-cont">
    <div class="col-md-12">
	  <h3  class="alert alert-info head-1">Manage Stores</h3>

    <div class="row">
      <div class="col-md-12 ralign">
        <button type="button" id="btn-asl-delete-all" class="btn btn-danger mrg-r-10">Delete Selected</button>
      </div>
    </div>
	  <table id="tbl_stores" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th align="center"></th>
          <th align="center"><input type="text" data-id="id"  placeholder="Search ID"  /></th>
          <th align="center"><input type="text" data-id="title"  placeholder="Search Title"  /></th>
          <th align="center"><input type="text" data-id="description"  placeholder="Search Description"  /></th>
          <th align="center"><input type="text" data-id="lat"  placeholder="Search Lat"  /></th>
          <th align="center"><input type="text" data-id="lng"  placeholder="Search Lng"  /></th>
          <th align="center"><input type="text" data-id="street"  placeholder="Search Street"  /></th>
          <th  align="center"><input type="text" data-id="state"  placeholder="Search State"  /></th>
          <th  align="center"><input type="text" data-id="city"  placeholder="Search City"  /></th>
          <th  align="center"><input type="text" data-id="phone"  placeholder="Search Phone"  /></th>
          <th  align="center"><input type="text" data-id="email"  placeholder="Search Email"  /></th>
          <th  align="center"><input type="text" data-id="website"  placeholder="Search URL"  /></th>
          <th  align="center"><input type="text" data-id="postal_code"  placeholder="Search Zip"  /></th>
          <th  align="center"><input type="text" data-id="is_disabled"  placeholder="Disabled"  /></th>
          <th  align="center"><input type="text" data-id="category" disabled="disabled" style="opacity:0"  placeholder="Categories"  /></th>
          <th  align="center"><input type="text" data-id="marker_id"  placeholder="Marker ID"  /></th>
          <th  align="center"><input type="text" data-id="logo_id"  placeholder="Logo ID" /></th>
          <th  align="center"><input type="text" data-id="start_time"  placeholder="Start Time"  /></th>
          <th  align="center"><input type="text" data-id="end_time"  placeholder="End Time"  /></th>
          <th  align="center"><input type="text" data-id="days"  placeholder="Created On" style="visibility: hidden"  /></th>
          <th  align="center"><input type="text" data-id="created_on"  placeholder="Created On"  /></th>
          <th  align="center"><Button type="button" class="btn btn-default" id="Search_Data">Search</Button></th>
        </tr>
        <tr>
          <th align="center"><a class="select-all">Select All</a></th>
          <th align="center">Store ID</th>
          <th align="center">Title</th>
          <th align="center">Description</th>
          <th align="center">Lat</th>
          <th align="center">Lng</th>
          <th align="center">Street</th>
          <th align="center">State</th>
          <th align="center">City</th>
          <th align="center">Phone</th>
          <th align="center">Email</th>
          <th align="center">URL</th>
          <th align="center">Postal Code</th>
          <th align="center">Disabled</th>
          <th align="center">Categories</th>
          <th align="center">Marker ID</th>
          <th align="center">Logo ID</th>
          <th align="center">Start Time</th>
          <th align="center">End Time</th>
          <th align="center">Days</th>
          <th align="center">Created On</th>
          <th align="center">Action&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
	  <div class="dump-message asl-dumper"></div>
    </div>
  </div>
</div>



<!-- SCRIPTS -->
<script type="text/javascript">
var ASL_Instance = {
	url: '<?php echo ASL_URL_PATH ?>'
};
asl_engine.pages.manage_stores();
</script>
