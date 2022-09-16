import * as BDA from "../../db";

export const findAll = (req, res) => {
    return res.json({
      ok: true,
      data: BDA.findAll(),
    });
  };

  