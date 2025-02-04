// tests/apiService.integration.test.ts
import { fetchUser } from '../src/apiService';

describe('fetchUser (Integration Test)', () => {
  it('should return user data from a real API', async () => {
    const result = await fetchUser(1);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
  });
});
