import { NestFactory } from '@nestjs/core'
import { config } from 'dotenv'

import { AppModule } from './app.module'

config()

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(process.env.APPLICATION_PORT ?? 40020)
}

bootstrap() //eslint-disable-line
