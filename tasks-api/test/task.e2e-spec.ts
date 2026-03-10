import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';  
import { AppModule } from './../src/app.module';

describe('TasksController (e2e)', () => {
  let app: INestApplication;
  let taskId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /task create a task', async () => {
    const response = await request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'Test Task', description: 'This is a test task', priority: 'high'})
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Task');
    taskId = response.body.id;
  });

  it('GET /tasks should return tasks', async () => {
    const response = await request(app.getHttpServer())
      .get('/tasks')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /tasks?status=pending should return filtered tasks', async () => {
    const response = await request(app.getHttpServer())
      .get('/tasks?status=pending')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach(task => {
      expect(task.status).toBe('pending');
    });
  });


  it('GET /tasks/:id should return one task', async () => {
    const response = await request(app.getHttpServer())
      .get(`/tasks/${taskId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', taskId);
  });

  it('PATCH /tasks/:id/status should update a task', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/tasks/${taskId}/status`)
      .send({ status: 'done' })
      .expect(200);

    expect(response.body).toHaveProperty('id', taskId);
  });

  it('DELETE /tasks/:id should delete a task', async () => {
    await request(app.getHttpServer())
      .delete(`/tasks/${taskId}`)
      .expect(200);
  });

});
