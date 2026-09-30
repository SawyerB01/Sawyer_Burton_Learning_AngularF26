import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicListItem } from './music-list-item';

describe('MusicListItem', () => {
  let component: MusicListItem;
  let fixture: ComponentFixture<MusicListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
