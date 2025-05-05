import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello(): string {
		return process.env.APPLICATION_PORT ?? '4001'
	}
}
