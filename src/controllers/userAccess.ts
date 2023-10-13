import { UserAccess } from '../models/userAccess';
import { NextFunction, Request, Response } from 'express';

export const getUserAccesses = (res: Response, next: NextFunction) => {
  UserAccess.findAll()
    .then((users) => res.status(200).json({ userAccess: users }))
    .catch((err) => next(err));
};

export const getUserAccessById = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  UserAccess.findAll({
    where: { userId },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => next(err));
};

export const createUserAccess = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.body.userId;
  UserAccess.create({
    userId,
  })
    .then((result) => {
      res.status(201).json({
        message: 'User Access record created successfully!',
        user: result,
      });
    })
    .catch((err) => next(err));
};

export const deleteUserAccess = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  UserAccess.destroy({
    where: { userId },
  })
    .then(() => {
      res.status(200).json({ message: `userAccess ${userId} deleted` });
    })
    .catch((err) => next(err));
};
