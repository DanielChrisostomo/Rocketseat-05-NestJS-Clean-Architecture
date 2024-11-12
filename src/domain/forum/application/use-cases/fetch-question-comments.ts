import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'
import { Either, right } from '@/core/either'
import { Inject, Injectable } from '@nestjs/common'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(@Inject(QuestionCommentsRepository) private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    
    const comments =
    await this.questionCommentsRepository.findManyByQuestionIdWithAuthor(
      questionId,
      {
        page,
      },
    )

    return right({
      comments,
    })
  }
}