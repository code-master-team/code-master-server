import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CourseModule } from './course/course.module'
import { LessonModule } from './lesson/lesson.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		PrismaModule,
		CourseModule,
		LessonModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
