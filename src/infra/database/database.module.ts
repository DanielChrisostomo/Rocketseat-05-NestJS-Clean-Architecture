import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answers-repository';
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository';
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository';
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository';
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments-repository';
import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';

@Module({
  providers: [
    PrismaService,
    PrismaAnswerRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository
    },
    PrismaQuestionCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
    QuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
  ],
})
export class DatabaseModule {}
