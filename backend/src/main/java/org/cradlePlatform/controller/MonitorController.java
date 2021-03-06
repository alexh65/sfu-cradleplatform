package org.cradlePlatform.controller;

import org.cradlePlatform.model.Monitor;
import org.cradlePlatform.repository.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class MonitorController {
    @Autowired
    private MonitorRepository monitorRepository;

    @PostMapping(path="/api/monitors")
    public String addMonitor (@RequestBody Monitor monitor) {
        monitorRepository.save(monitor);
        return "Saved Monitor";
    }

    @GetMapping(path="/api/monitors")
    public Iterable<Monitor> getAllMonitors() {
        return monitorRepository.findAll();
    }
}
