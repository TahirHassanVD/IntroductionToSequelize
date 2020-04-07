const service = require('../src/service/tasks.service');

jest.mock('../src/reporsitories/tasks.repository');

describe('task', () => {
  it('get all', async () => {
    const obj = await service.findAll();

    expect(obj.length > 0).toBeTruthy();
  });
});
