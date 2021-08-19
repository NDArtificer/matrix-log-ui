import { Component, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'matrix-log-ui';

  ngAfterViewInit(){
    (($) => {
      "use strict";
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
              if  (this instanceof HTMLAnchorElement && this.href === path) {
                  $(this).addClass("active");
              }
          });   
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }

}
