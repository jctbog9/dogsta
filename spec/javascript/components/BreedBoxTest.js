import BreedBox from '../../../app/javascript/react/components/BreedBox';

describe('BreedBox', () => {
  let onClick,
      breedName,
      wrapper;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy');
    wrapper = mount(
      <BreedBox
        breedName="Corgi"
        handleRandomBreed={onClick}
      />
    );
  });

  it('should render an a tag', () => {
    expect(wrapper.find('a')).toBePresent();
  });

  it('should render an a tag with the text property value', () => {
    expect(wrapper.find('a').text()).toBe('Corgi');
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.find('i').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
