import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'
import { Either, right } from '@/core/either'
import { Inject, Injectable } from '@nestjs/common'

interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

Injectable()
export class FetchAnswerCommentsUseCase {
  constructor(@Inject(AnswerCommentsRepository) private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const comments =
    await this.answerCommentsRepository.findManyByAnswerIdWithAuthor(
      answerId,
      {
        page,
      },
    )

    return right({
      comments,
    })
  }
}