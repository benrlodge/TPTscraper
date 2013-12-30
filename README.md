I created a website for my wife ( http://www.mrs-lodges-libary.com ). She sells some of her lessons on TeachersPayTeachers.com, but unfortunately they don't have any API to pull the lessons she posts there. So, I created a little web scraper script that will pull her free lessons, and build a carousel with it.

I use http://bxslider.com for the carousel

To modify, in the scrapeTPT.php file, change the url to the url of the TPT account you want to scrape from.

I need to add caching to this, right now it just pulls for each page request.