/**
 * Разбивает массив на подмассивы (чанки) фиксированного размера.
 *
 * @param array - Исходный массив, который нужно разделить на чанки.
 * @param size - Размер каждого чанка (количество элементов в каждом подмассиве).
 * @returns Массив подмассивов, где каждый подмассив содержит не более `size` элементов.
 *
 * @example
 * const items = [1, 2, 3, 4, 5];
 * const chunkedItems = chunkArray(items, 2);
 * // Результат: [[1, 2], [3, 4], [5]]
 *
 * @remarks
 * Если общее количество элементов в массиве не делится нацело на `size`,
 * то последний чанк будет содержать оставшиеся элементы.
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) {
    throw new Error('Size must be greater than 0');
  }

  return array.reduce<T[][]>((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([]);
    }
    chunks[chunks.length - 1].push(item);
    return chunks;
  }, []);
};
