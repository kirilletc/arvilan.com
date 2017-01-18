/*///////  Javascript initialization for template ///////*/
jQuery(document).ready(function() {
	if(jQuery('table').hasClass('category'))
		jQuery('table.category').addClass('table table-striped');
	if(!jQuery('.control-label', '.control-group').is('[class*="col-md-"]'))
		jQuery('.control-group').children('.control-label').attr('class', '').addClass('control-label col-md-4');
	if(!jQuery('.controls', '.control-group').is('[class*="col-md-"]'))
		jQuery('.control-group').children('.controls').attr('class', '').addClass('controls col-md-8');
	if(!jQuery('button').is('[class*="btn-"]'))
		jQuery('button').addClass('btn btn-primary');
	if(jQuery('.readmore').children().hasClass('btn'))
		jQuery('.readmore').children().addClass('btn btn-primary');
	if(jQuery('a.readmore').not('.btn') || jQuery('.mod-articles-category-readmore > a').not('.btn'))
		jQuery('a.readmore,.mod-articles-category-readmore > a').addClass('btn btn-primary');
	jQuery('.btn.btn-primary', '.com_users .widget-component').parent().addClass('col-md-offset-4');
	jQuery('button.btn-primary', '#contact-form .widget-component').addClass('col-md-offset-4');
	jQuery('.tagspopular').find('a').addClass('label label-info');
	jQuery('a.accordion-toggle').on('click', function () {
		jQuery('.accordion-heading').removeClass('active').children().attr('aria-expanded', false);
	    jQuery(this).attr('aria-expanded', true).parent().addClass('active');
	});
	jQuery('a.accordion-toggle[aria-expanded="true"]').parent().addClass('active');
	
	//////////////// AUTO WIDTH FOR COMPONET AREA /////////////////////
	var $vCom = jQuery('.vtem-block.widget-component'),
		$vRight = jQuery('.vtem-block.position-right'),
		$vLeft = jQuery('.vtem-block.position-left');
	if((!$vCom.siblings().hasClass('position-right') && !$vCom.siblings().hasClass('position-left')) && ($vCom.data('vgrid') < 12))
		$vCom.removeClass('col-md-'+$vCom.data('vgrid')).addClass('col-md-12');
	else if(($vCom.siblings().hasClass('position-right') && !$vCom.siblings().hasClass('position-left')) && ($vCom.data('vgrid')+$vRight.data('vgrid') < 12))
		$vCom.removeClass('col-md-'+$vCom.data('vgrid')).addClass('col-md-'+(12 - $vRight.data('vgrid')));
	else if((!$vCom.siblings().hasClass('position-right') && $vCom.siblings().hasClass('position-left')) && ($vCom.data('vgrid')+$vLeft.data('vgrid') < 12))
		$vCom.removeClass('col-md-'+$vCom.data('vgrid')).addClass('col-md-'+(12 - $vLeft.data('vgrid')));
		
	//////////////// BEGIN GO TOP /////////////////////
	jQuery('.vtemgotop, .gotop, .totop').click(function () {
		jQuery('body, html').animate({scrollTop: 0}, 800);
		return false; 
	});
		
	//////////////// BLOG STYLES /////////////////////
	jQuery('.blog, .item-page', '.blog-classic.com_content').find('.item-image').each(function(id, el) {
		if (jQuery(el).length > 0) {
			jQuery(el).append('<dl class="article-info">'+jQuery(el).parent().find('.article-info:first').html()+'</dl>');
			jQuery(el).parent().find('.article-info:first').hide();
		}
		if (jQuery(el).prevAll('.tags').length <= 0)
			jQuery(el).siblings('.icons').addClass('clearfix');
	});
	
	//////////////// BEGIN MATCH HEIGHT /////////////////////
	jQuery('.matchHeight .widget-gridstack-item').matchHeight({property: 'height'});
		
	//////////////// WOW ANIMATE /////////////////////
	wow = new WOW({boxClass:'vtem-animation', animateClass:'animated', offset: 100});
	wow.init();
	//jQuery('.modal').magnificPopup({type:'image'});
	jQuery(document).scroll(function () {
        var scroll = jQuery(this).scrollTop();
        var el = jQuery('.navbar-fixed-top, .fixed-top');
        if (scroll > el.position().top) {
            el.addClass('scroll-top');
        } else {
            el.removeClass('scroll-top');
        }
    });
});