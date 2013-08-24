$(document).ready(function(){
    
    $('.product_item').hide();

    var lessons = {

        nameArray : [], linkArray : [], imgArray : [], descrArray : [], lessonName : '', lessonLink : this.linkArray,
        
        scrapeData : function(){ 
            console.log('scrapeData');

            $(".price").each(function() {

                if ($(this).text() == 'FREE') {

                    console.log('free lesson');

                    var keepers = $(this).closest('.product_item').show();                
                    var name = keepers.find('.title >').text();
                    var link = keepers.find('.title > a').attr('href');
                    var image = keepers.find('.js_product_small_image').attr('src');
                    var descr = keepers.find('.description').text();
                    
                    lessons.nameArray.push(name);
                    lessons.linkArray.push(link);
                    lessons.imgArray.push(image);
                    lessons.descrArray.push(descr);
                }

            });
        },


        printThisYO : function(){

                function lessonOne(){

                    var lesson = '';

                    for (var i=0; i<lessons.nameArray.length; i++){

                       // var lesson += lessons.linkArray[i];
                        lesson += '<div class="freeLessonWrapper slide">';
                        lesson += '<a target="_blank" href="http://teacherspayteachers.com' + lessons.linkArray[i] + '">';
                        lesson += '<div title="'+ lessons.descrArray[i] +'" class="imageWrapper"><img src="'+ lessons.imgArray[i] + '"></div>';
                        lesson += '<div class="lessonInfo"><strong>' + lessons.nameArray[i] + '</strong>';
                        lesson += '</a>'
                        lesson += '</div></div>';
                      }

                    return lesson;
        
                }

            $('.freeLessons').html(lessonOne());
        }



    } //lessons

    lessons.scrapeData();
    lessons.printThisYO();


    $('.freeLessons').bxSlider({
        slideWidth: 270,
        minSlides: 4,
        maxSlides: 3,
        slideMargin: 10
     });



});
