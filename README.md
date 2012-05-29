# jQuery Slick Slider #

****

## What Do We Need? ##

### Mark Up ###

1. A containing div (#slick-slider)
2. Menu items with data-index attributes relating to the position of the corresponding content
3. A #slides-window div with overflow hidden to view the current slide through while hiding the others
4. The #slides div to hold your slides
5. Your slides in divs with the .slide class and an ID of the position. i.e. the first div should be #1, the second #2, third #3
6. The first menu item and the first slide should be assigned the class .active

### Some CSS ###

1. We need the slides in a row, to achieve this the #slides div needs to have 10000% width and overflow hidden
2. We can then float left all of the .slide[s] and give them a width of 1%, this keeps the slider responsive
3. Then we need to hide the overflow for the #slides-window and give it some padding

### The jQuery ###

1. Add the slick slide file to your website
2. You can supply fade and transitionDuration arguments to the initSlickSlider() function. Defaults = {fade: true, transitionDuration: 300}
3. Initialise the Slick Slider on the #menu li's, i.e. $('#slick-slider #menu li').initSlickSlider({fade: false, transitionDuration: 800});

-------------------------------

## An Example ##

### HTML ###

~~~ html


  <div id="slick-slider">
    <ul id="menu">
      <li data-index="1" class="active">
        Item 1
      </li>

      <li data-index="2">
        Item 2
      </li>

      <li data-index="3">
        Item 3
      </li>

      <li data-index="4">
        Item 4
      </li>
    </ul>

    <div id="slides-window">
      <div id="slides">
        <div class="slide" id="1">
          <h3>Slide 1</h3>
          <p>Some Content Would Go In Here</p>
        </div>

        <div class="slide" id="2">
          <h3>Slide 2</h3>
          <p>Some Content Would Go In Here</p>
        </div>

        <div class="slide" id="3">
          <h3>Slide 3</h3>
          <p>Some Content Would Go In Here</p>
        </div>

        <div class="slide" id="4">
          <h3>Slide 4</h3>
          <p>Some Content Would Go In Here</p>
        </div>
      </div>
    </div>
  </div>

~~~

### CSS ###

~~~ css


  #slides-window {
    overflow: hidden;
    padding: 20px;
  }

  #slides {
    width: 10000%;
    overflow: hidden;
    height: 0;
  }

  .slide {
    width: 1%;
    float: left;
    margin-right: 0.2%;
  }

~~~


