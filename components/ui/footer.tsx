

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">


          {/* Контактная информация */}
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Email:</strong> <a href="mailto:nyuroprint@yandex.ru" className="text-indigo-400 hover:underline">nyuroprint@yandex.ru</a>
            </p>
            </div>
            <div className="space-y-2">
            <p className="text-sm">
              <strong>Телефон:</strong> <a href="tel:+79930811885" className="text-indigo-400 hover:underline">+7 993 081‒18‒85</a>
            </p>
          </div>

          {/* Местоположение */}
          <div className="text-sm sm:self-start">
            <p>
              <strong>Местоположение:</strong> 
              г.Ростов-на-Дону, Ростовская обл. Почтовый индекс: 344000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}