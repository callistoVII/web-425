import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a random character ID between 1 and 1000 with no decimals', () => {
    const id = component.generateId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBeTrue();
  });

  it('should add a character with correct customization', () => {
    component.formModel = {
      name: 'Lyra',
      gender: 'Female',
      class: 'Mage',
    };

    component.addCharacter();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Lyra');
    expect(component.characters[0].gender).toBe('Female');
    expect(component.characters[0].class).toBe('Mage');
  });

  it('should reset all form fields to default to values after resetForm is called', () => {
    component.formModel = {
      name: 'Temp',
      gender: 'Male',
      class: 'Warrior',
    };

    component.resetForm();

    expect(component.formModel.name).toBe('');
    expect(component.formModel.gender).toBe('Male');
    expect(component.formModel.class).toBe('Warrior');
  });
});
