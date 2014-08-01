package fly.login.dao;

import java.util.List;

import org.springframework.orm.hibernate3.HibernateTemplate;

import fly.login.model.User;

public class UserDAO implements IUserDAO{

	private HibernateTemplate hibernateTemplate; 
	
	
	@Override
	public void add(User u) {
		hibernateTemplate.save(u);
	}

	@Override
	public boolean checkExistByName(String username) {
		List<User> users = hibernateTemplate.find("from User u where u.username = '" + username + "'");
		if(users != null && users.size() > 0) {
			return true;
		}
		return false;
	}

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return null;
	}

}
