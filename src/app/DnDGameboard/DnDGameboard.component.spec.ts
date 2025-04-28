import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { DnDGameBoardComponent } from './DnDGameboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        DnDGameBoardComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DnDGameBoardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio'`, () => {
    const fixture = TestBed.createComponent(DnDGameBoardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DnDGameBoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Portfolio');
  });
});
