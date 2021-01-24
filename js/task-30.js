function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
const defaultSettings = {
        category,
        priority,
        completed,
    };

    const finalSettings = { ...defaultSettings, ...data };

    return finalSettings;
  // Пиши код выше этой строки
}
