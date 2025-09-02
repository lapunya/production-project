// чтобы явно определить тип того, что мы хотим импортировать из таких (.scss) файлов создаем этот файл - глобальной
// декларации типов

declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
