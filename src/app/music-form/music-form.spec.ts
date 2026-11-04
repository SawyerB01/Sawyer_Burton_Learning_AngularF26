import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicForm } from './music-form';

describe('MusicForm', () => {
  let component: MusicForm;
  let fixture: ComponentFixture<MusicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
