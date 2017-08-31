package de.slackspace.keycloaktutorial.contract.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.slackspace.keycloaktutorial.contract.domain.Contract;
import de.slackspace.keycloaktutorial.security.domain.UserDetails;

@RestController
@RequestMapping(value = "/api/contracts")
public class ContractResource {

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Contract> getContracts(UserDetails userDetails) {
        Contract a = new Contract("a - called by user: " + createUserAppendix(userDetails));
        Contract b = new Contract("b - called by user: " + createUserAppendix(userDetails));

        List<Contract> contracts = new ArrayList<>();
        contracts.add(a);
        contracts.add(b);

        return contracts;
    }

    private String createUserAppendix(UserDetails userDetails) {
        return userDetails.getFullName() + " (id= " + userDetails.getId() + ")";
    }

}
