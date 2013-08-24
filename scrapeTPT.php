<?php

    include_once('scripts/simple_html_dom.php');
    
	echo $html;
    //$html = file_get_html('data.html');
    $html = file_get_html('http://www.teacherspayteachers.com/Store/Mrs-Lodge/Order:Price-Asc');

?>

<link href='css/tptslider.css' rel='stylesheet' type='text/css'>
<link href="css/jquery.bxslider.css" rel='stylesheet' type='text/css'>


    <div class='allProducts' style='display:none'>
        <?php  foreach($html->find('.product_item') as $e) echo $e->outertext;  ?>
    </div>

        
    <div class='sliderWrapper'>
        <div class='freeLessons'></div>
    </div>


<script src="js/jquery.min.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src="js/tpt.js"></script>