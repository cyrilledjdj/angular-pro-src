import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { API_TOKEN } from '../../token';
import { SideViewerComponent } from './side-viewer.component';

describe('SideViewerComponent', () => {
  let component: SideViewerComponent;
  let fixture: ComponentFixture<SideViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideViewerComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_TOKEN, useValue: '' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
