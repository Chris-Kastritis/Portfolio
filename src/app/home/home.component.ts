import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Portfolio';
  slideIndex: number = 1;
  ngOnInit() {
    console.log(this.slideIndex);
    setTimeout(() => {
      this.showSlides(this.slideIndex);
    }, 10); 
  }
  plusSlides(n: number): void {
    console.log(this.slideIndex);
    this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
  currentSlide(n: number): void {
   console.log(this.slideIndex);
   this.showSlides(this.slideIndex = n);
}

 showSlides(n: number): void {
  let i: number;

  // Get all slides and dots
  const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
  const texts: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("text") as HTMLCollectionOf<HTMLElement>;
  // Wrap around if n exceeds the bounds of the slides
  if (n > slides.length) {
    this.slideIndex = 1;
  }
  if (n < 1) {
    this.slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }

  // Show the current slide and mark the corresponding dot as active
   slides[this.slideIndex - 1].style.display = "block";
   dots[this.slideIndex - 1].className += " active1";
   texts[this.slideIndex - 1].style.display = "block";
}
}
