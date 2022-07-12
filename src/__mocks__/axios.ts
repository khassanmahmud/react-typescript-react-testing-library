const mockResponse = {
  results: [
    {
      name: {
        first: "Hassan",
        last: "Mahmud",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      login: {
        username: "khassanmahmud",
      },
    },
    {
      name: {
        first: "John",
        last: "Doe",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      login: {
        username: "jhondoe",
      },
    },
    {
      name: {
        first: "Kamal",
        last: "Uddin",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      login: {
        username: "kamaluddin",
      },
    },
    {
      name: {
        first: "Rahim",
        last: "Uddin",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      login: {
        username: "rahimuddin",
      },
    },
    {
      name: {
        first: "Raju",
        last: "Uddin",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      login: {
        username: "rajuuddin",
      },
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue({ data: mockResponse }),
};
