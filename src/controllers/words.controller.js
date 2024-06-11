const words = [
  {
    id: 1,
    palabra_es: "palabra",
    palabra_xiu: "word",
  },
];
export const getAll = async (req, res) => {
  try {
    const obj = words;

    res.status(200).json({
      message: "Success",
      data: obj,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = words.filter((item) => item.id == id);
    res.status(200).json({
      message: "Success",
      data: obj,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
