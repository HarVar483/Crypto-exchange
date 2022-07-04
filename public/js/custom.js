(function($) {
  'use strict';
	$('[data-dismiss="modal"][data-toggle="modal"]').click(function(){
		setTimeout(function() {
			$('body').addClass('modal-open');
		}, 500);
	});
	$('[data-toggle="show-hide"]').click(function(){
		var hide_elem = $(this).data('hide');
		var show_elem = $(this).data('show');
		$(show_elem).slideToggle();
		$(hide_elem).slideUp('fast');
	});
	$('.showPassword').click(function(){
		$(this).toggleClass('inActive');
		if($(this).hasClass('inActive')){
			$(this).closest('.password-field').find('.form-control').attr('type','text');
		}else {
			$(this).closest('.password-field').find('.form-control').attr('type','password');
		}
	});
	$('.form-control').each(function(){
		if($(this).val()!=''){
			$(this).parent('.form-group').addClass("is-filled");
		}
	});
	$('.form-control').on("focus", function() {
		var val = $(this).val();
		$(this).parent('.form-group').addClass("is-focused");
		if(val==''){
			$(this).parent('.form-group').removeClass("is-filled");
		}else {
			$(this).parent('.form-group').addClass("is-filled");
		}
	}).on("blur", function() {
		var val = $(this).val();
		$(this).parent(".form-group").removeClass("is-focused");
		if(val!=''){
			$(this).parent('.form-group').addClass("is-filled");
		}else {
			$(this).parent('.form-group').removeClass("is-filled");
		}
	});

	$(document).on("focus",'.selectize-control', function() {
		if($(this).is('.search-opt,.searchOptNew')){
			var val = $(this).find('input').val();
			$(this).parent('.form-group').addClass("is-focused");
			if(val==''){
				$(this).parent('.form-group').removeClass("is-filled");
			}else {
				$(this).parent('.form-group').addClass("is-filled");
			}
		}
	});
	
	/* if($('.textEditor').length>0){ */
		$('.textEditor').each(function () {
				var id = $(this).attr('id');
				CKEDITOR.replace(id), ({
				toolbar: [
					{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview'] },
					{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
					{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
					{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
					{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat' ] },
					{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ] },
					{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
					{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe' ] },
					{ name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
					{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
					{ name: 'others', items: [ '-' ] },
					{ name: 'about', items: [ 'About' ] }
				]
			});
    });
	/* } */
	$('#from').datetimepicker({
		format: 'DD/MM/YYYY',
	});
	$('#to').datetimepicker({
		format: 'DD/MM/YYYY',
		useCurrent: false //Important! See issue #1075
	});
	$("#from").on("dp.change", function (e) {
		$('#to').data("DateTimePicker").minDate(e.date);
	});
	$("#to").on("dp.change", function (e) {
		$('#from').data("DateTimePicker").maxDate(e.date);
	});
	
if($('#myChart2').is(':visible')){
	var ctx = document.getElementById("myChart2").getContext('2d');
	var myChart_bg_color = ctx.createLinearGradient(0, 0, 0,300);
	myChart_bg_color.addColorStop(0, '#6f56ba');
	myChart_bg_color.addColorStop(1, 'rgba(255,255,255,0)');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [{
				label: 'NOS. OF POST',
				lineTension: 0,
				data: [2500, 1800, 3500, 1500, 1000, 3000, 1860, 1354,2500, 1800, 3500, 1500],
				backgroundColor: myChart_bg_color,
				borderWidth: 3,
				borderColor: '#6f56ba',
				pointBorderWidth: 0,
				pointBorderColor: 'transparent',
				pointRadius: 3,
				pointBackgroundColor: 'transparent',
				pointHoverBackgroundColor: '#6f56ba',
			}]
		},
		options: {
			legend: {
				display: false
			},
		tooltips: {
			titleFontSize: 16,
			titleFontColor: '#ffffff',
			bodyFontColor: '#ffffff',
			//backgroundColor: '#58bd91',
			displayColors: false,
			callbacks: {
		title: function(tooltipItems, data) {
			return '';
		},
				label: function(tooltipItem, data) {
			var item = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
			return item + ' hrs';
		}
			},
			custom: function(tooltipModel,tooltipItem) {
				var s = tooltipModel.dataPoints[0].datasetIndex;
				if(s==0){
					tooltipModel.backgroundColor = '#6f56ba';
				}
				if(s==1){
					tooltipModel.backgroundColor = '#ef7e42';
				}
			}
		},
			scales: {
				yAxes: [{
				scaleLabel: {
					display: true,
			fontSize: 20,
					labelString: 'No. of User'
				},
					gridLines: {
						// display: false,
						drawBorder: true,
						color: '#f2f2f2',
					},
					ticks: {
						beginAtZero: true,
						stepSize: 600,
						/* mirror: true,
						padding: 0, */
						callback: function(value, index, values) {
							return value;
						}
					},
				}],
				xAxes: [{
					gridLines: {
						display: true,
						tickMarkLength: 15,
					},
			scaleLabel: {
				display: true,
				fontSize: 20,
				labelString: 'Time Period'
			},
				}]
			},
			bezierCurve: false
		}
	});
}

	
	
  $(function() {
    var body = $('body');
    var sidebar = $('.sidebar');

    /* function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    }) */

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    $('[data-toggle="minimize"]').on("click", function() {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

  });
	
	$('.status').on('change', function() {
		if($(this).val()=='active'){
			$(this).removeClass('text-danger');
			$(this).addClass('text-success');
		}else {
			$(this).removeClass('text-success');
			$(this).addClass('text-danger');
		}
	});
	$('.status').each(function(){
		if($(this).val()=='active'){
			$(this).addClass('text-success');
		}else {
			$(this).addClass('text-danger');
		}
	});
	
	//Open submenu on hover in compact sidebar mode and horizontal menu mode
  $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
    var body = $('body');
    var sidebarIconOnly = body.hasClass("sidebar-icon-only");
    var sidebarFixed = body.hasClass("sidebar-fixed");
    if (!('ontouchstart' in document.documentElement)) {
      if (sidebarIconOnly) {
        if (sidebarFixed) {
          if (ev.type === 'mouseenter') {
            body.removeClass('sidebar-icon-only');
          }
        } else {
          var $menuItem = $(this);
          if (ev.type === 'mouseenter') {
            $menuItem.addClass('hover-open')
          } else {
            $menuItem.removeClass('hover-open')
          }
        }
      }
    }
  });
  $('.aside-toggler').click(function(){
    $('.chat-list-wrapper').toggleClass('slide')
  });
	$('[data-toggle="tooltip"]').tooltip();
	$(function(){
		$('.sidebar .nav .nav-item').removeClass('active')
    var current = location.pathname;
    $('.sidebar li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.parent().addClass('active');
        }
    })
	})
})(jQuery);
/* $(function() {
	$( "#from" ).datepicker({
	dateFormat: "d M yy",
			defaultDate: "w",
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function( selectedDate ) {
					$( "#to" ).datepicker( "option", "minDate", selectedDate );
			}
	});
	$( "#to" ).datepicker({
	dateFormat: "d M yy",
			defaultDate: "-w",
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function( selectedDate ) {
					$( "#from" ).datepicker( "option", "maxDate", selectedDate );
			}
	});
}); */
function validationFrom(d1)
{
	var dateTo = new Date($('#to').val());
	var dd = dateTo.getDate(); 	
	//var mm = dateTo.getMonth(); 
	var mm = ("0" + (dateTo.getMonth() + 1)).slice(-2);
	var yy = dateTo.getFullYear();
	
	var todt = (yy*10000)+(mm*100)+leadingZero(dd);
	var d1 =parseInt(d1,10);
	var d2 =parseInt(todt,10);

	if(d1 >= d2)
	{
		var dateFrom = new Date($('#from').val());
		var dd = dateFrom.getDate();
		var mm = dateFrom.getMonth(); 	
		var yy = dateFrom.getFullYear();
		
		
		var newDateFrom = new Date(yy,mm,dd);
		var dd = newDateFrom.getDate();	
		//var mm = newDateFrom.getMonth();	
		var mm = ("0" + (newDateFrom.getMonth() + 1)).slice(-2);	
		var yy = newDateFrom.getFullYear();

		var frmdt = yy+"-"+mm+"-"+leadingZero(dd);
		$('#to').val($.datepicker.formatDate( "d M yy", new Date(frmdt) ));
	}	
}
function dateFromNext()
{
	//alert('datefromNext');
	var dateFrom = new Date($('#from').val());
	//alert();
	var dd = dateFrom.getDate(); 	
	var mm = dateFrom.getMonth(); 	
	var yy = dateFrom.getFullYear();
	
	
	var newDateFrom = new Date(yy,mm,dd+1);
	var dd = newDateFrom.getDate();	

	//var mm = newDateFrom.getMonth();	
	var mm = ("0" + (newDateFrom.getMonth() + 1)).slice(-2);	
	var yy = newDateFrom.getFullYear();
	var frmdt = yy+"-"+mm+"-"+leadingZero(dd);
	$('#from').val($.datepicker.formatDate( "d M yy", new Date(frmdt) ));
	var d1 = (yy*10000)+(mm*100)+leadingZero(dd);
	 validationFrom(d1);
}
function dateFromPrev()
{
	var dateFrom = new Date($('#from').val());

	var dd = dateFrom.getDate(); 
	
	
	var mm = dateFrom.getMonth(); 	
	var yy = dateFrom.getFullYear();
	
	var newDateFrom = new Date(yy,mm,dd-1);
	var dd = newDateFrom.getDate();	
	//var mm = newDateFrom.getMonth();	
	var mm = ("0" + (newDateFrom.getMonth() + 1)).slice(-2);	
	var yy = newDateFrom.getFullYear();
	var frmdt = yy+"-"+mm+"-"+leadingZero(dd);
	$('#from').val($.datepicker.formatDate( "d M yy", new Date(frmdt) ));
}
function validationTo(d1)
{
	var dateFrom = new Date($('#from').val());
	var dd = dateFrom.getDate(); 	
	var mm = dateFrom.getMonth(); 	
	var yy = dateFrom.getFullYear();
		
	var frmdt = (yy*10000)+(mm*100)+leadingZero(dd);
	var d1 =parseInt(d1,10);
	var d2 =parseInt(frmdt,10);
	//alert(d1+' '+d2);
	if(d1 <= d2)
	{
		var dateTo = new Date($('#to').val());
		var dd = dateTo.getDate(); 	
		var mm = dateTo.getMonth(); 	
		var yy = dateTo.getFullYear();
	
		var newDateTo = new Date(yy,mm,dd);
		var dd = newDateTo.getDate();	
		//var mm = newDateTo.getMonth();	
		var mm = ("0" + (newDateTo.getMonth() + 1)).slice(-2);	
		var yy = newDateTo.getFullYear();
		var todt = yy+"-"+mm+"-"+leadingZero(dd);
		$('#from').val($.datepicker.formatDate( "d M yy", new Date(todt) ));
	}	
}
function dateToNext()
{
	var dateTo = new Date($('#to').val());
	
	var dd = dateTo.getDate(); 	
	var mm = dateTo.getMonth(); 	
	var yy = dateTo.getFullYear();
	
	var newDateTo = new Date(yy,mm,dd+1);
	var dd = newDateTo.getDate();	
	//var mm = newDateTo.getMonth();	
	var mm = ("0" + (newDateTo.getMonth() + 1)).slice(-2);	
	var yy = newDateTo.getFullYear();
	var todt = yy+"-"+mm+"-"+leadingZero(dd);
	$('#to').val($.datepicker.formatDate( "d M yy", new Date(todt) ));
	
	 
}
function dateToPrev()
{
	var dateTo = new Date($('#to').val());
	
	var dd = dateTo.getDate(); 	
	var mm = dateTo.getMonth(); 	
	var yy = dateTo.getFullYear();
	
	var newDateTo = new Date(yy,mm,dd-1);
	var dd = newDateTo.getDate();	
	//var mm = newDateTo.getMonth();	
	var mm = ("0" + (newDateTo.getMonth() + 1)).slice(-2);	
	var yy = newDateTo.getFullYear();
	var todt = yy+"-"+mm+"-"+leadingZero(dd);
	$('#to').val($.datepicker.formatDate( "d M yy", new Date(todt) ));
	var d1 = (yy*10000)+(mm*100)+leadingZero(dd);
	 validationTo(d1);
} 

function leadingZero(value){
   if(value < 10){
      return "0" + value.toString();
   }
   return value.toString();    
}

$("#change_password").validate({
	rules : {
		password : {
			minlength : 5
		},
		confirm_password : {
			minlength : 5,
			equalTo : '[name="password"]'
		}
	}
});

$(document).ready(function (){
	function handleSelectEvent(){
		$('.dataTables_length,.dataTables_filter').wrapAll('<div class="table-filter clearfix">');
	};
	
	table = $('.dataTable')	.on('draw.dt', function () {
			//handleSelectEvent();
	}).DataTable({
		'columnDefs': [{
			 'targets': 0,
			 'searchable': false,
			 'orderable': false
			 //'className': 'dt-body-center'
		}]
	});
	
	$('#search').keyup(function(){
		table.search($(this).val()).draw() ;
	})

   // Handle click on "Select all" control
   $('#example-select-all').on('click', function(){
      // Get all rows with search applied
      var rows = table.rows({ 'search': 'applied' }).nodes();
      // Check/uncheck checkboxes for all rows in the table
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
   });

   // Handle click on checkbox to set state of "Select all" control
   $('#example tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
         var el = $('#example-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control
            // as 'indeterminate'
            el.indeterminate = true;
         }
      }
   });

   // Handle form submission event
   $('#frm-example').on('submit', function(e){
      var form = this;

      // Iterate over all checkboxes in the table
      table.$('input[type="checkbox"]').each(function(){
         // If checkbox doesn't exist in DOM
         if(!$.contains(document, this)){
            // If checkbox is checked
            if(this.checked){
               // Create a hidden element
               $(form).append(
                  $('<input>')
                     .attr('type', 'hidden')
                     .attr('name', this.name)
                     .val(this.value)
               );
            }
         }
      });
   });

});
$(document).ready(function() {
	$("#dataTable1").DataTable();
});

$('.otpInput input').keyup(function(){
	$(this).next().focus();
}).keyup(function(e){
	if(e.keyCode == 8){
		$(this).prev().focus();
	}
});

$('.navbar-toggler[data-toggle="offcanvas"]').click(function(){
	if(!$('nav#sidebar.sidebar-offcanvas').hasClass('active')){
		$('nav#sidebar.sidebar-offcanvas').addClass('active');
		$('#mask').fadeIn();
	}else {
		$('nav#sidebar.sidebar-offcanvas').removeClass('active');
		$('#mask').fadeOut();
	}
});
$('#mask').click(function(){
	$(this).fadeOut();
});
$(document).mouseup(function(e){
	var sidebar = $('nav#sidebar.sidebar-offcanvas,.navbar-toggler[data-toggle="offcanvas"]');
	if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
		sidebar.removeClass('active');
		$('#mask').fadeOut();
	}
});
$('.accordionTable .accordionToggle').click(function(){
	if(!$(this).closest('tr').next('.content').find('.contentTable').is(':visible')){
		$('.accordionTable tr.active').removeClass('active');
		$('.accordionTable tr.content .contentTable').slideUp('fast');
		$(this).closest('tr').next('.content').find('.contentTable').slideDown('fast');
		$(this).closest('tr').addClass('active');
	}else {
		$(this).closest('tr').next('.content').find('.contentTable').slideUp('fast');
		$(this).closest('tr').removeClass('active');
	}
});


if($('#chart').is(':visible')){
	Highcharts.chart('chart', {
		chart: {
				type: 'spline'
		},
		title: {
				text: null
		},
		subtitle: {
				text: null
		},
		xAxis: {
				// categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				labels: {
					enabled: false // disable labels
				}
		},
		yAxis: {
			title: null,
				/* title: {
            text: 'Sales, Pounds',
						style: {
								fontSize: '14px',
								color: '#000000',
								fontFamily: 'SF UI Display Medium'
						},
        }, */
				max: 20000
		},
		credits: {
				enabled: false
		},
		plotOptions: {
				spline: {
						marker: {
								radius: 6,
								lineColor: '#000',
								lineWidth: 2
						}
				}
		},
		series: [{
				showInLegend: false,
				data: [0, 9000, 8000, 0, 8000, 14000, 7000,11000,15000,13000,9800,20000],
				lineWidth: 3,
				shadow: {
          width: 8,
          opacity: .1,
					color: '#222'
        },
				color: '#666'
		}]
	});
}

$(function() {
	$('.time').datetimepicker({
		useCurrent: true,
		format: 'HH:mm'
	});
	/* $('.dropdown-menu').on('click', function(event){
    event.stopPropagation();
	}); */
});


$("#treeview").hummingbird();