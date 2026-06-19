package com.internship.tool.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.internship.tool.entity.Risk;
import com.internship.tool.service.RiskService;
import com.internship.tool.config.JwtUtil;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RiskController.class)
@AutoConfigureMockMvc(addFilters = false)
class RiskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RiskService riskService;

    @MockBean
    private JwtUtil jwtUtil; // 🔥 FIX

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetAllRisks() throws Exception {

        Risk risk = new Risk();
        risk.setId(1L);
        risk.setTitle("Cyber Risk");
        risk.setDescription("Testing");
        risk.setStatus("OPEN");

        when(riskService.getAll()).thenReturn(List.of(risk));

        mockMvc.perform(get("/api/risks"))
                .andExpect(status().isOk());
    }

    @Test
    void testCreateRisk() throws Exception {

        Risk risk = new Risk();
        risk.setTitle("New Risk");
        risk.setDescription("Test Desc");
        risk.setStatus("OPEN");

        when(riskService.create(any(Risk.class))).thenReturn(risk);

        mockMvc.perform(post("/api/risks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(risk)))
                .andExpect(status().isOk());
    }

    @Test
    void testDeleteRisk() throws Exception {

        doNothing().when(riskService).delete(1L);

        mockMvc.perform(delete("/api/risks/1"))
                .andExpect(status().isOk());
    }
}