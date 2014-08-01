/**
 * @author chengfei
 *
 */
package fly.login.dao;

import java.util.List;
import fly.login.model.User;

public interface IUserDAO{
	public void add(User u);
	public boolean checkExistByName(String username);
	public List<User> getUsers();
}