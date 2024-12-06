import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]) // No routes defined for testing
      ],
      declarations: [
        AppComponent // Declare the component to test
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Ensure app is created successfully
  });

  it(`should have as title 'angular-routing-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-routing-example'); // Check the title property
  });

  it('should render title in an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection to update the template
    const compiled = fixture.nativeElement as HTMLElement;
    // Check if the h1 tag contains the title
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-routing-example');
  });
});
