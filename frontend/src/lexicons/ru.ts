export default {
  project: 'Орбита',
  actions: {
    save: 'Сохранить',
    submit: 'Отправить',
    cancel: 'Отмена',
    close: 'Закрыть',
    delete: 'Удалить',
    create: 'Создать',
    edit: 'Изменить',
    add: 'Добавить',
  },
  security: {
    login: 'Вход',
    logout: 'Выход',
    register: 'Регистрация',
    reset: 'Забыл пароль',
    reset_desc: `Вы можете запросить одноразовую ссылку для входа в свой аккаунт. После авторизации вы сможете изменить свой старый пароль.`,
  },
  models: {
    user: {
      title_one: 'Пользователь',
      title_many: 'Пользователи',
      id: 'Id',
      username: 'Логин',
      password: 'Пароль',
      fullname: 'Имя',
      email: 'E-mail',
      phone: 'Телефон',
      active: 'Активирован',
      blocked: 'Заблокирован',
      role: 'Группа',
    },
    user_role: {
      title_one: 'Группа',
      title_many: 'Группы',
      id: 'Id',
      title: 'Название',
      scope: 'Разрешения',
      users: 'Пользователи',
    },
  },
  components: {
    table: {
      no_data: 'Нет данных для вывода',
      no_results: 'Результатов не найдено',
      records: 'Записей нет | {total} запись | {total} записи | {total} записей',
      query: 'Поиск...',
      delete: {
        title: 'Требуется подтверждение',
        confirm: 'Вы уверены, что хотите удалить эту запись?',
      },
    },
  },
  pages: {
    index: 'Главная',
    admin: {
      title: 'Админка',
      users: 'Пользователи',
      user_roles: 'Группы',
    },
    user: {
      title: 'Аккаунт',
      profile: 'Профиль',
    },
  },
  success: {
    profile: 'Профиль успешно сохранён',
  },
  errors: {
    user: {
      no_username: 'Укажите имя пользователя',
      no_fullname: 'Укажите полное имя',
      no_email: 'Укажите email',
      username_exists: 'Имя пользователя уже занято',
      email_exists: 'Такой email уже используется',
      inactive: 'Учётная запись не была активирована',
      blocked: 'Учётная запись заблокирована',
    },
    login: {
      wrong: 'Неправильное имя или пароль',
    },
    activate: {
      no_user: 'Пользователь не существует или не сбрасывал пароль',
      ttl: 'Время действия ссылки истекло',
      wrong: 'Неверный временный пароль',
    },
  },
}
