import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TEST 1: All Fields Required
  it('should mark the form invalid when required fields are missing', () => {
    component.guildForm.setValue({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: '',
    });

    expect(component.guildForm.valid).toBeFalse();
  });

  // TEST 2: Accept Terms must be checked
  it('should require acceptTerms to be checked for the form to be valid', () => {
    component.guildForm.patchValue({
      guildName: 'Knights of Nyx',
      description: 'A guild for Masters of Night.',
      type: 'Competitve',
      acceptTerms: false,
      notificationPreference: 'Email',
    });

    expect(component.guildForm.valid).toBeFalse();

    component.guildForm.patchValue({ acceptTerms: true });

    expect(component.guildForm.valid).toBeTrue();
  });

  // TEST 3: Prevent submission if form is invalid
  it('should NOT add a guild when the form is invalid', () => {
    component.guildForm.patchValue({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: '',
    });

    component.createGuild();

    expect(component.guilds.length).toBe(0);
  });
});
