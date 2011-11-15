This Git repository includes all of the source code used in creating a tutorial about [carousels in Sencha Touch][tutorial].

The tutorial includes several checkpoints:

* [Blank slate][0]
* [A basic carousel][1] ([view diff][00-01])
* [Carousel plus vbox layout (with much duplication)][2] ([view diff][01-02])
* [Carousel plus vbox layout (DRY, with a custom componenent)][3] ([view diff][02-03])
* [Carousel with a nested carousel][4] ([view diff][03-04])
* [Carousel with a flipcard][5] ([view diff][04-05])

## Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/senchalearn/Carousel-demo.git

Change into the directory:

    cd Sencha-Touch-Carousel-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_basic_carousel origin/01_basic_carousel
    git checkout -b 02_carousel_plus_vbox_verbose origin/02_carousel_plus_vbox_verbose
    git checkout -b 03_carousel_plus_vbox_dry origin/03_carousel_plus_vbox_dry
    git checkout -b 04_carousel_plus_carousel origin/04_carousel_plus_carousel
    git checkout -b 05_carousel_plus_toolbar origin/05_carousel_plus_toolbar


## Live demo

You can try out the demo here:

* [http://senchalearn.github.com/Carousel-demo/][demo]

![link QR code](http://qrcode.kaywa.com/img.php?s=5&d=http%3A%2F%2Fsenchalearn.github.com%2FCarousel-demo%2F)

[demo]: http://senchalearn.github.com/Carousel-demo/
[tutorial]: http://www.sencha.com/learn/an-introduction-to-carousels

[0]: https://github.com/senchalearn/Carousel-demo/tree/00_blank_slate
[1]: https://github.com/senchalearn/Carousel-demo/tree/01_basic_carousel
[2]: https://github.com/senchalearn/Carousel-demo/tree/02_carousel_plus_vbox_verbose
[3]: https://github.com/senchalearn/Carousel-demo/tree/03_carousel_plus_vbox_dry
[4]: https://github.com/senchalearn/Carousel-demo/tree/04_carousel_plus_carousel
[5]: https://github.com/senchalearn/Carousel-demo/tree/05_carousel_plus_toolbar

[00-01]: https://github.com/senchalearn/Carousel-demo/compare/00_blank_slate...01_basic_carousel
[01-02]: https://github.com/senchalearn/Carousel-demo/compare/01_basic_carousel...02_carousel_plus_vbox_verbose
[02-03]: https://github.com/senchalearn/Carousel-demo/compare/02_carousel_plus_vbox_verbose...03_carousel_plus_vbox_dry
[03-04]: https://github.com/senchalearn/Carousel-demo/compare/03_carousel_plus_vbox_dry...04_carousel_plus_carousel
[04-05]: https://github.com/senchalearn/Carousel-demo/compare/04_carousel_plus_carousel...05_carousel_plus_toolbar
