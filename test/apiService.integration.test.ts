// tests/apiService.test.ts
import { fetchUser } from '../src/apiService';
import axios from 'axios';

// Mockear axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchUser', () => {
  it('should return user data when API call is successful', async () => {
    // Mock the axios response
    const mockUser = { id: 1, name: 'John Doe' };
    mockedAxios.get.mockResolvedValueOnce({
      data: mockUser,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { url: 'https://jsonplaceholder.typicode.com/users/1' },
    });

    // Call the function and verify the result
    const result = await fetchUser(1);
    expect(result).toEqual(mockUser);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  });

  it('should throw an error when API call fails', async () => {
    // Mock an axios error
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    // Verify that the function throws an error
    await expect(fetchUser(1)).rejects.toThrow(
      'Error fetching user: Network Error'
    );
  });
});
