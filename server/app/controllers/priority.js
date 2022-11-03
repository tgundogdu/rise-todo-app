const getPriorities = async (req, res) => {
  try {
    const dummyPriorities = [
      { id: 1, label: "Urgent", color: "#F96666" },
      { id: 2, label: "Important", color: "#005691" },
      { id: 3, label: "Regular", color: "#3C4048" },
    ];

    return res.status(200).json(dummyPriorities);
  } catch (error) {
    res.status(404).json({ message: "Some error occured." });
  }
};

export { getPriorities };
