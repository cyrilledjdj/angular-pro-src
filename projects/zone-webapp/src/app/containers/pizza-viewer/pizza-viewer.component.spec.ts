import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { API_TOKEN } from '../../token';
import { PizzaViewerComponent } from './pizza-viewer.component';

describe('PizzaViewerComponent', () => {
  let component: PizzaViewerComponent;
  let fixture: ComponentFixture<PizzaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaViewerComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_TOKEN, useValue: '' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
