describe('TaskApi test get request', () => {
    it('Get tasks request test', async () => {
      //ARRANGE
      const getTasksQuery = fetch(
        'https://1hlwmq3p9k.execute-api.eu-central-1.amazonaws.com/dev/tasks'
      ).then((response) => response.json());
  
      //ACT
      const tasks = await getTasksQuery;
  
      //ACCERT
      expect(typeof tasks === 'object').toBeTruthy();
    });
    it('Get task request test', async () => {
      //ARRANGE
      const id = 1;
      const getTaskByIdQuery = fetch(
        `https://1hlwmq3p9k.execute-api.eu-central-1.amazonaws.com/dev/tasks/${id}`
      ).then((response) => response.json());
  
      //ACT
      const task = await getTaskByIdQuery;
  
      //ACCERT
      expect(typeof task === 'object').toBeTruthy();
    });
  });
  