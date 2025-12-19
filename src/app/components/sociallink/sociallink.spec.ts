import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sociallink } from './sociallink';

describe('Sociallink', () => {
  let component: Sociallink;
  let fixture: ComponentFixture<Sociallink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sociallink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sociallink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
