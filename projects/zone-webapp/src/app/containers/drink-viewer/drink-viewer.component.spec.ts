import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { API_TOKEN } from '../../token';
import { DrinkViewerComponent } from './drink-viewer.component';

describe('DrinkViewerComponent', () => {
  let component: DrinkViewerComponent;
  let fixture: ComponentFixture<DrinkViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkViewerComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_TOKEN, useValue: '' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
