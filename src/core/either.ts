// Error
export class Left<L, R> {
    readonly value: L
  
    constructor(value: L) {
      this.value = value
    }
    
    isRight(): this is Right<L, R> {
      return false
    }
  
    isLeft(): this is Left<L, R> {
      return true
    }
  }
  
  // Success
  export class Right<L, R> {
    readonly value: R
  
    constructor(value: R) {
      this.value = value
    }

    isRight(): this is Right<L, R> {
      return true
    }
  
    isLeft(): this is Left<L, R> {
      return false
    }
  }
  
  export type Either<L, R> = Left<L, R> | Right<L, R>
  
  export const left = <L, R>(value: L): Either<L, R> => {
    return new Left(value)
  }

  // The left function creates a instance of Left. It returs the type Either<L, R> which contains a Left<L>
  
  export const right = <L, R>(value: R): Either<L, R> => {
    return new Right(value)
  }

  // UI -> CTRL -> USE CASE -> ENTITIE -> USE CASE -> REPOSITORY -> DATABASE