// template_2.js
// Written by Sam for scms
// This view should show all, non admin pages in scms
// Also, yes, this is a pug file. I just named it .js for the text coloring
// version 1.0

doctype html
html(lang="en")
    head
        meta( charset="utf-8" )
        meta( http-equiv="X-UA-Compatible" content="IE=edge" )
        meta( name="viewport" content="width=device-width, initial-scale=1.0" )
        
        title=""
        
        script( src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" )
        
        link( rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous")
        script( src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous")
        link( href="https://fonts.googleapis.com/css?family=Assistant:400|Raleway:200,500" rel="stylesheet")
        
        
        style.   
            /* ============================= css ======================================= */
            
            html {
            	width: 100%;
            	height: 110%;
            }
            body {
              width: 100%;
              height: 100%;
            }
            body {
            	background-color: #f2f2f2;
            	/*background: linear-gradient(to bottom, #404040 0%,  #404040 70%, #101010 80%, #101010 100%);*/            	
            }
            
            h1, h2, h3, h4, h5, h6, t, p, body {
                font-family: sans-serif;
            }
            
            body, p, t {
                font-family: 'assistant', sans-serif;
            	font-size: 18px;
                line-height: 28px;
            }
            
            h1, h2, h3 {
            	color: #202020;
                text-align: center;
            	font-family: 'Raleway', sans-serif;
            	font-weight: 500;
            }
            
            #title_holder{
                background: rgba(20, 20, 20, 0.2);
                width: 100%;
                min-height: 180px;
                margin: 0px;
                padding: 40px 10px 40px 10px;
                border: solid 1px rgba(20, 20, 20, 0.3);
            }
            
            #site_title {
            	font-family: 'Raleway', sans-serif;
            	font-weight: 500;
            	font-size: 50px;
            	margin-top: 20px;
            	color: white;    
            	text-shadow: 1px 1px 3px #101010;
            }
            
            #page_title {
            	font-family: 'Raleway', sans-serif;
            	font-weight: 200;
            	font-size: 35px;
            	margin-bottom: 20px;
                color: #202020;
            }
            
            #header_image{
            	display: none;
            	margin: 2px auto 4px auto;
                width: 80%;
                max-width: 550px;
            }
            
            h4, h5 { color: #282828; }
                        
            .no_underline:hover {
                text-decoration: none;
            }
            
            #loading_div {
              width: 100%;
              height: 100%;
              position: fixed;
              top: 0px;
              left: 0px;
              text-align: center;
              padding-top: 100px;
              background-color: #202020;
            }
            #load_text {color: #f8f8f8;}
            
            .alert {
              display: none;
              position: fixed;
              top: 15px;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
            }
            
            #tab_bar {
            	width: 100%;
            	min-height: 20px;
            	background-color: #f8f8f8;
            	border-bottom: solid 1px black;
            	box-shadow: 0px 2px 2px 1px rgba(20, 20, 20, 0.7);
            	padding: 0px 10px 0px 10px;
            	text-align: left;
            }
            .tab {
            	display: inline-block;
            	margin: 0px 0.1% 0px 0.1%;
            	padding: 13px 15px 14px 15px;
            	background-color: #f8f8f8; 
            	cursor: pointer; 
            	color: #202020;
            	transition: all 0.3s;
            	font-size: 14px;
                line-height: 20px;
            	
            }
            .tab:hover {
            	background-color: #dfdfdf;
            	color: #000000;
            	transition: all 0.5s;
            }
            
            .tab.active {
            	color: white;
            }
            
            #tab_title {
            	display: inline-block;
            	font-size: 18px;
            	font-family: 'Raleway', sans-serif;
            	font-weight: 500;  
            	margin: 0px;
            	padding: 14px;
            }
            
            #tab_container {
            	display: inline-block;
            	position: absolute;
            	right: 20px;
            	width: 70%;
            	text-align: right;
            }
            
            #paper {
            	background-color: white;
            	border: solid 1px black;
            	width: 90%;
            	max-width: 1000px;
            	min-height: 70%;
            	margin: 50px auto 20px auto;
            	padding: 40px 4% 50px 4%;
            }
            
            #page_content {
            	text-align: left;
            	margin-top: 40px;
            	color: black;
            }
            
            .slideshow_image {
            	height: 300px !important;
            	margin-left: auto;
            	margin-right: auto;
            }
            
            #slideshow {
            	background-color: #202020;
            	border: solid 1px black;
            }
            
            td {
                vertical-align: middle !important;
            }
            
            
            @media (max-width: 480px) {
                .slideshow_image {
                    height: 160px !important;
                }
                
                #paper {
                    margin-left: 0px;
                    margin-right: 0px;  
                    border: none;
                    border-radius: 0px;
                    width: 100%;
                }
                
                td {
                     font-size: 14px;
                }               
                
            }
            
            @media (max-width: 800px) {
            	#tab_title {
                    display: block;
                    font-size: 18px;
                    text-align: center;
                }
                
                #tab_container {
                    display: block;
                    position: static;
                    width: 100%;
                    text-align: center;
                }
            }
    body
        // ======================================= BODY ======================================
        div( id="tab_bar" )
            a( href="/" class="no_underline" )
                h3( id="tab_title" )
            div( id="tab_container" )
            
        div( id="title_holder" )
            a( href="/" class="no_underline" )
                h1( id="site_title" )
            a( href="/"  class="no_underline" )
                img( id="header_image" )
        
        div( id="paper")
          h2( id="page_title" )
          div( id="slideshow" class="carousel slide" data-ride="carousel")
              // Wrapper for slides
              div( id="carousel_inner" class="carousel-inner" role="listbox")
                //div( class="item active")
                //  img( src="..." alt="carousel image")
              
			    
          div( id="page_content" )
        
        
        div( id="loading_div" )
          h1( id="load_text" ) Loading
        
        
        div( id="alert_success" class="alert alert-success" role="alert")
        div( id="alert_info" class="alert alert-info" role="alert")
        div( id="alert_warning" class="alert alert-warning" role="alert")
        div( id="alert_danger" class="alert alert-danger" role="alert")
    
    script( src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js")
    script.
      // Initialize Firebase
      var config = {
        apiKey: '{apiKey}',
        authDomain: '{authDomain}',
        databaseURL: '#{databaseURL}',
        projectId: '#{projectId}'
      };
      firebase.initializeApp(config);
    
      
    script.
        // ============================ SCRIPT ===============================
        function show_loading() {
        	  load_i++;
              switch (load_i % 4) {
                case 0:
                  load_text.text('Loading');
                  break;
                case 1:
                  load_text.text('Loading .');
                  break;
                case 2:
                  load_text.text('Loading . .');
                  break;
                case 3:
                  load_text.text('Loading . . .');
                  break;
              }
        }
        
       
        function load_loop () {
            if (!loading) return;
            show_loading();
            
            setTimeout(load_loop, 400);
        }
        
        var loading = true;
        var load_i = 0;
        var load_text = $('#load_text');
        load_loop();
        
        // ============================= FIRST PAGE LOAD ==========================
        
        let page_data = null;
        firebase.database().ref('/scms_data/info_page_content').once('value', function(snapshot){
                page_data = snapshot.val();
                page_data['site_title'] = page_data['site_name'];
                page_data['root'] = '#{root}';
                //$.post( document.URL)
                //    .done(function( data ) {
                //        page_data = JSON.parse(data);
                                
                // Main Page Content
                
                // Main Page Content
                let location_pathname = window.location.pathname;
                // remove trailing slash if it exists
                if (location_pathname[ location_pathname.length - 1 ] === '/')
                    location_pathname = location_pathname.substring(0, location_pathname.length - 1);
                
                let root_index = location_pathname.indexOf(page_data['root']);
                page_data['url'] = location_pathname.substring(root_index+page_data['root'].length).toLowerCase();
                let temp_page = {};        
                let page_found = false;
                if (root_index === -1 || page_data['url'] === '') {
                    // root not found in url so url at root with not ending in slash, or nothing after root, 
                    // go home (aka first tab)
                    // we need content, title, and url
                    page_data['id'] = page_data['site_tabs'][0]['id'];
                    temp_page = page_data['page_content'][page_data['id']];
                    page_data['page_title'] = temp_page['name'];
                    page_data['page_content'] = temp_page['content'];
                    page_data['url'] = temp_page['url'];
                }
                else {
                    // we need content, title, and url
                    page_data['page_content'].forEach(function(temp_page){
                        if (temp_page['url'] !== page_data['url'])
                            return;
                        page_data['page_title'] = temp_page['name'];
                        page_data['page_content'] = temp_page['content'];
                        
                        page_found = true;
                    });
                    
                    if (!page_found) {
                        // 404
                        page_data['page_title'] = '404';
                        page_data['page_content'] = '<h2>Page Not Found</h2>';
                    }
                }
                
                
                $('#page_title').text(page_data['page_title'].toUpperCase());
                $('#page_content').html(page_data['page_content']);
                   
                
                
                if (page_data['background_image'] !== '') {
                    $('body').css('background', 'url('+page_data['background_image']['url']+') no-repeat')
                        .css('background-size', 'cover').css('background-attachment', 'fixed');
                }
                
                let slideshow_html = '';
                let slideshow_images = page_data['slideshow_images'];
                if (slideshow_images === undefined) {
                    slideshow_images = [];
                    $('#slideshow').css('display', 'none');
                }
                

                for(let i = 0; i < slideshow_images.length; i++){
                	if (i === 0)
                        slideshow_html += '<div class="item active" >';
                    else
                        slideshow_html += '<div class="item" >';
                        
                	slideshow_html +=     '<img alt="carousel image" src="'+ slideshow_images[i] +'" class="slideshow_image" />';
                	slideshow_html += '</div> ';
                }
                $('#carousel_inner').append(slideshow_html);
                
                if (page_data['header_image']['url'] !== '') {
                    $('#site_title').css('display', 'none');
                    $('#header_image').css('display', 'block').attr('src', page_data['header_image']['url']);
                    if (page_data['header_image']['ratio'] !== '')
                        $('#header_image').attr('ratio', page_data['header_image']['ratio'])
                }
                else
                    $('#site_title').text(page_data['site_title'].toUpperCase());//.css('color', page_data['site_color']);
                
                $('#tab_title').text(page_data['site_title'].toUpperCase());
                
                
                
                // JQuery CSS
                
                //$('a').css('color', page_data['site_color']);
                let jq_css = '<style id="jq_css"> ';
                jq_css +=         'a, a:hover, .color, h1, h2, h3 { color: '+ page_data['site_color'] +'; } ';
                jq_css +=         '.tab.active { background-color: '+ page_data['site_color'] +'; } ';
                jq_css +=    '</style>';
                
                $('head').append(jq_css);
                
                // TABS 
                
                let tabs_html = '';
                page_data['site_tabs'].forEach(function(tab){
                    tabs_html += '<div id="'+tab['url']+'_tab" class="tab ';
                    
                    if (tab['url'] === page_data['url'])
                        tabs_html += 'active';
                        
                    tabs_html += '" href='+tab['url']+'>'+ tab['name'].toUpperCase() + '</div>';
                });
                
                $('#tab_container').append(tabs_html);     
                //$('.tab.active').css('background-color', page_data['site_color']);           
                
                // prevent page popping
                $('img').each(function(){
                    let this_img = $(this);
            	    if (this_img.attr('ratio') === undefined)
            	        return;
                    this_img.height( this_img.width() / this_img.attr('ratio') );
                });
                
                $('#loading_div').fadeOut();
                loading = false;
                document.title = page_data['site_title'] + ' - ' + page_data['page_title'];
                
                $('.tab').each(function(){
                    $(this).on('click', function(){
                    	do_assignment('page', $(this).attr('href'));
                    });
                });
                
                $('head').append('<link rel="icon" href="'+page_data['favicon_image']['url']+'">');
            });
        
        // Prevent page popping
        $(window).resize(function(){
            $('img').each(function(){
            	let this_img = $(this);
            	if (this_img.attr('ratio') === undefined)
            	    return;
                this_img.height( this_img.width() / this_img.attr('ratio') );
            });	
        });
        
        // ================================== OTHER PAGE LOADS ================================
        
        function do_assignment(assignment, assignment_data) {
            switch(assignment) {
                case 'page': 
                    loading = true;
                    load_loop();
                    //$('#loading_div').fadeIn(200);
                    
                    let new_url = assignment_data.toLowerCase();
                    let base_url = document.URL.substring(0, document.URL.lastIndexOf(page_data['path']));
                    if (base_url[ base_url.length -1 ] !== '/')
                        base_url += '/';
                    
                    
                    firebase.database().ref('/scms_data/info_page_content/page_content').once('value', function(snapshot){
                        let data = snapshot.val();
                        let found = false;
                        data.forEach(function(page){
                            if (found || page['url'] !== new_url)
                                return;	
                            
                            found = true;
                            $('#page_title').text(page['name'].toUpperCase());
                            $('#page_content').html(page['content']);
                            //$('a').css('color', page_data['site_color']);
                            
                            //$('#loading_div').fadeOut(200);
                            loading = false;
                            $('.tab.active').removeClass('active');
                            $('#'+new_url+'_tab').addClass('active');
                            //setTimeout(() => $('.tab.active').css('background-color', page_data['site_color']), 100);
                            
                            document.title = page['name'] + ' - ' + page_data['site_title'];                                   
                            history.pushState({'page_data': page_data, 'new_url': new_url}, page_data['page_title'], page_data['root']+new_url);
                        });
                                                
                        if (!found) {
                            $('#page_title').text('404');
                            $('#page_content').text('Page Not Found');
                            
                            //$('#loading_div').fadeOut(200);
                            loading = false;
                            $('.tab.active').removeClass('active');
                            
                            document.title =  '404' + ' - ' + page_data['site_title'];     
                            history.pushState({'page_data': page_data, 'new_url': new_url}, page_data['page_title'], page_data['root']+new_url);
                        }                            

                    });
                    
                    /*$.post( base_url+ new_url)
                      .done(function( data ) {
                        page_data = JSON.parse(data);
                        
                        $('#page_title').text(page_data['page_title'].toUpperCase());
                        $('#page_content').text(page_data['page_content']);
                        
                        $('#loading_div').fadeOut();
                        loading = false;
                        document.title = page_data['site_title'] + ' - ' + page_data['page_title'];
                        
                        history.pushState({'page_data': page_data}, page_data['page_title'], page_data['root']+new_url);
                        
                      });*/
        
                break;
            }
        }
        
        window.onpopstate = function(event) {
            do_assignment('page', event.state['new_url']);
        };    
        
            
            
            
            
            
        
        