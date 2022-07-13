const SayHello = require('../../../src/application/use_cases/SayHello');
const HelloController = require('../../../src/interfaces/controllers/HelloController');

jest.mock('../../../src/application/use_cases/SayHello');

describe('#sayHelloWorld', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Bonjour monde !');

    // when
    const response = await HelloController.sayHelloWorld();

    // then
    expect(response).toBe('Bonjour monde !');
  });
});

describe('#sayHelloPerson', () => {

  test('should resolves', async () => {
    // given
    SayHello.mockImplementationOnce(() => 'Buongiorno John !');
    const request = { params: { name: 'John' } };

    // when
    const response = await HelloController.sayHelloPerson(request);

    // then
    expect(response).toBe('Buongiorno John !');
  });
});


