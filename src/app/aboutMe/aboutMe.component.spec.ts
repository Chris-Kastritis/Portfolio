import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './aboutMe.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AboutMeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutMeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio'`, () => {
    const fixture = TestBed.createComponent(AboutMeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AboutMeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Portfolio');
  });
});
